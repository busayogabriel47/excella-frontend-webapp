import "../student/students.css"




const DownloadCourse = ({filesList, errorMsg, downloadFile}) => {
  

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
          {filesList.length > 0 ? (
            filesList.map(
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