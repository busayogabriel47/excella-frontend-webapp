import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../student/students.css"

const UploadedCourses = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/getAllFiles");
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);


  return (
    <>
    <div className='download_heading py-4'>
        <h2>Uploaded course materials</h2>
    </div>
    <div className="files-container text-center">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Uploaded Files</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>
                  <td className="file-description">{file_mimetype}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UploadedCourses;