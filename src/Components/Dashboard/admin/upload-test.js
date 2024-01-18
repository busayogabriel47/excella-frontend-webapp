import React, { useEffect, useState } from 'react'
import { decodeToken } from '../../../Utils/AdminAuthDecode';

function UploadTest() {

    const [cohorts, setCohorts] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState('');
  const [formUrl, setFormUrl] = useState('');


  useEffect(()=> {
    //Fetch the list of cohorts when the component mounts

    const fetchCohorts = async () => {
        try {
            const response = await fetch('https://excella-api.onrender.com/api/cohorts');
            const data = await response.json();
            setCohorts(data);
          } catch (error) {
            console.error('Error fetching cohorts:', error);
          }
    }

    // Authentication and admin role check
    const adminToken = localStorage.getItem('jwt');
    if (adminToken) {
        const decodedToken = decodeToken(adminToken);
        if (decodedToken && decodedToken.role === 'admin') {
          console.log('Admin is logged in and has the role of admin');
        } else {
          console.log('User is not an admin');
        }
      } else {
        console.log('Admin is not logged in');
      }

    fetchCohorts()
  }, [])



  const addFormUrl = async () => {
    try {

        const adminToken = localStorage.getItem('jwt')

      // Make a POST request to the server to add the form URL to the selected cohort
      const response = await fetch(`https://excella-api.onrender.com/api/cohorts/${selectedCohort}/add-form-url`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${adminToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formUrl }),
      });

      const data = await response.json();

      // Display success or error message based on the response
      alert(data.message);
    } catch (error) {
      console.error('Error adding form URL:', error);
      alert('Error adding form URL. Please try again.');
    }
  };
  

  return (
    <div>
        <form>
        
            <div style={{margin: '2rem 0', display: "flex", justifyContent: "space-between"}}>
            <label htmlFor="cohortSelect">Select Cohort:</label>
                <select
                id="cohortSelect"
                name="cohortSelect"
                value={selectedCohort}
                onChange={(e) => setSelectedCohort(e.target.value)}
                required
                >
                <option value="">Select Cohort</option>
                {cohorts.map((cohort) => (
                    <option key={cohort._id} value={cohort._id}>
                    {cohort.name}
                    </option>
                ))}
                </select>
            </div>

        <div style={{}}>
            <label htmlFor="formUrl">Upload assessment:</label> <br/>
            <input style={{margin: '1rem 0', width: "50%"}}
            type="text"
            id="formUrl"
            name="formUrl"
            value={formUrl}
            onChange={(e) => setFormUrl(e.target.value)}
            required
            />
        </div>

        <button type="button" onClick={addFormUrl} style={{border: "0", background: "#030447", color: "#fff"}}>
          Upload
        </button>
      </form>
    </div>
  )
}

export default UploadTest