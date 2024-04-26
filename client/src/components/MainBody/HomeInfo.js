import './HomeInfoStyles.css'
import HomeData from "./HomeData";
import HomeInfoImg1 from "../../assets/homeInfoImg1.jpg";
import HomeInfoImg2 from "../../assets/homeInfoImg2.jpg";
import HomeInfoImg3 from "../../assets/todo1.jpg";

const HomeInfo = () => {

    return (
        <div className={'home-info'}>
            <h1>Data Exploration and Analysis</h1>
            <br></br>
            <h5>Exploratory Data Analysis is a crucial step in understanding the 
                underlying patterns, trends, and relationships within your data.</h5>

            <HomeData
                className={'first-info'}
                heading={'Upload Your Data and get super-fast analysis'}
                text={'Start by uploading your dataset. Our platform supports various file formats, allowing you to analyze data from different sources. Once uploaded, you can proceed to explore and analyze your data through interactive visualizations and statistical summaries.'}
                img1={HomeInfoImg1}
                img2={HomeInfoImg2}
            />

            <HomeData
                className={'first-info-reverse'}
                heading={'Exploratory Data Analysis '}
                text={'Utilize our EDA tools to gain deeper insights into your data. Our platform offers a range of statistical techniques and visualizations, including histograms, scatter plots, and correlation matrices, to help you uncover patterns, identify outliers, and understand the underlying structure of your data.'}
                img1={HomeInfoImg3}
                img2={HomeInfoImg2}
            />
        </div>
    )
}

export default HomeInfo