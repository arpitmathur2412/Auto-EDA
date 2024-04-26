import React, { useState } from "react";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const Stocks = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      alert('Please select a CSV file.');
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5001/perform-eda', formData);
      const { data } = response;

      // Set images in state
      setImages(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container text-center">
      <h1>Upload Dataset for analysis</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="fileInput" accept=".csv" onChange={handleFileChange} />
              <label className="custom-file-label" htmlFor="fileInput">Choose CSV file</label>
            </div>
          </div>
          <button className="btn btn-primary btn-block" onClick={handleSubmit} disabled={!file || loading}>
            {loading ? <>Generating <Spinner animation="border" size="sm"/></> : 'Upload File'}
          </button>
        </div>
      </div>
      {images && (
        <div className="row justify-content-center">
          {Object.keys(images).map((key, index) => (
            <div key={index} className="col-md-6">
              <img src={`data:image/png;base64,${images[key]}`} alt={`Plot ${index}`} className="img-fluid mb-3" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Stocks;
