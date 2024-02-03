import { useState } from "react";
import "../student/students.css"
import { decodeToken } from "../../../Utils/AdminAuthDecode";
import { useParams } from "react-router-dom";




const DownloadCourse = ({filesList, errorMsg, downloadFile, studentData}) => {

console.log(filesList);

const {cohorts} = studentData

console.log(cohorts)

//Filter files based on the student's cohort ID
const filteredFiles = filesList.filter((file)=> file.cohort === cohorts[0]._id)

  return (
    <div className="files-container">
        <div className='my-5 download_heading'>
            <h2>Download course resources</h2>
        </div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
          </tr>
        </thead>
        <tbody>
          {filteredFiles.length > 0 ? (
            filteredFiles.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>
                  <td>
                    <button
                    className="download-btn"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download <span>
                      <i class="fa fa-download" aria-hidden="true"></i>
                      </span>
                    </button>
                  </td>
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
  );
};

export default DownloadCourse;