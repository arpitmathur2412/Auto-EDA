import matplotlib
matplotlib.use('agg')  # Set Matplotlib to use the 'agg' backend
from flask import Flask, request, jsonify, render_template
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import io
import base64
from flask_cors import CORS
sns.set()
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

def perform_eda(csv_file):
    df = pd.read_csv(csv_file)
    eda_results = {}

    # Generate summary statistics image
    summary_statistics_img = plt.figure(figsize=(8,6))
    ax = summary_statistics_img.add_subplot(111)
    ax.axis('off')
    ax.table(cellText=df.describe().values,
             colLabels=df.describe().columns,
             loc='center')
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    eda_results['summary_statistics'] = base64.b64encode(buffer.read()).decode('utf-8')
    plt.close()  # Close the figure after saving

    # Generate missing values image
    missing_values_img = plt.figure(figsize=(8, 6))
    ax = missing_values_img.add_subplot(111)
    ax.axis('off')
    ax.table(cellText=df.isnull().sum().to_frame(name='missing_count').values,
             colLabels=['missing_count'],
             loc='center')
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    eda_results['missing_values'] = base64.b64encode(buffer.read()).decode('utf-8')
    plt.close()  # Close the figure after saving

    numerical_vars = df.select_dtypes(include=['int', 'float']).columns
    categorical_vars = df.select_dtypes(include=['object']).columns

    for col in numerical_vars:
        plt.figure(figsize=(8, 6))
        sns.histplot(df[col].dropna(), kde=True)
        plt.title(f'Histogram of {col}')
        plt.xlabel(col); plt.ylabel('Frequency')
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        eda_results[f'histogram_{col}'] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()  # Close the figure after saving
    
    for col in numerical_vars:
        plt.figure(figsize=(8, 6))
        sns.boxplot(y=df[col])
        plt.title(f'Box plot of {col}')
        plt.ylabel(col)
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        eda_results[f'boxplot_{col}'] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()  # Close the figure after saving

    for col in categorical_vars:
        plt.figure(figsize=(8, 6))
        sns.countplot(x=col, data=df)
        plt.title(f'Bar chart of {col}')
        plt.xlabel(col); plt.ylabel('Count')
        plt.xticks(rotation=45)
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        eda_results[f'barchart_{col}'] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()  # Close the figure after saving

    correlation_matrix = df[numerical_vars].corr()
    if not correlation_matrix.empty:
        plt.figure(figsize=(10, 8))
        sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt='.2f')
        plt.title('Correlation Matrix')
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        eda_results['correlation_heatmap'] = base64.b64encode(buffer.read()).decode('utf-8')
        plt.close()  # Close the figure after saving
    else:
        print("Correlation matrix is empty")

    return eda_results

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/perform-eda', methods=['POST'])
def eda():
    file = request.files['file']
    if file:
        buffer=io.BytesIO()
        buffer.flush()
        eda_results = perform_eda(file)
        print(jsonify(eda_results))
        return jsonify(eda_results)
    return jsonify({'error': 'No file uploaded'})

if __name__ == '__main__':
    app.run(port=5001)
