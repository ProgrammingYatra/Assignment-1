import React, { useState } from 'react'
import axios from "axios"

const UploadForm = () => {
    const [videos, setVideos] = useState([]);
    const [jsonObjects, setJsonObjects] = useState([]);
  
    const handleVideoChange = (event) => {
      setVideos(event.target.files);
    };
  
    const handleJsonChange = (event) => {
      setJsonObjects(event.target.files);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      for (let i = 0; i < videos.length; i++) {
        formData.append("videos[]", videos[i]);
      }
  
      for (let i = 0; i < jsonObjects.length; i++) {
        formData.append("jsonObjects[]", jsonObjects[i]);
      }
  
      axios
        .post("localhost:4000/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video-upload">Upload Videos:</label>
          <input
            type="file"
            id="video-upload"
            name="video-upload"
            accept="video/*"
            multiple
            onChange={handleVideoChange}
          />
        </div>
        <div>
          <label htmlFor="json-upload">Upload JSON Objects:</label>
          <input
            type="file"
            id="json-upload"
            name="json-upload"
            accept=".json"
            multiple
            onChange={handleJsonChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    );
  }

export default UploadForm
