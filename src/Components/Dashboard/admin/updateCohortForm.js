
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {decodeToken} from "../../../Utils/AdminAuthDecode"
import spinner from "../../../images/spinner-2.gif"
import axios from 'axios'



function UpdateCohortForm({cohort, onUpdate}) {

    const [updatedCohort, setUpdatedCohort] = useState({...cohort})
    const [banner, setBanner] = useState(null);
    
    const [loading, setLoading] = useState(false)
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUpdatedCohort((prevCohort)=> ({
        ...prevCohort,
        [name]: value,
        })); 
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUpdatedCohort((prevCohort)=> ({
            ...prevCohort,
            banner: file,
        }))
    }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {

        //Get the admin token from the local storage
        const adminToken = localStorage.getItem('jwt')

        const formData = new FormData();

        // Object.entries(updatedCohort).forEach(([key, value])=> {
        //     formData.append(key, value);
        // })

        formData.append('name', updatedCohort.name);
        formData.append('formUrl', updatedCohort.formUrl);
        formData.append('startDate', updatedCohort.startDate);
        formData.append('endDate', updatedCohort.endDate);

        if(updatedCohort.banner){
          formData.append('uploads', updatedCohort.banner);
        }

        // Log the URL before making the request
    const requestUrl = `https://excella-api.onrender.com/api/update-cohort/${cohort._id}`;
    console.log('PUT request URL:', requestUrl);

      // Make a PUT request to update the cohort
      const response = await axios.put(
        requestUrl, formData, {
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
        }
      });

      // Notify the parent component (or refresh the cohort list)
      onUpdate(response.data);

      // Close the modal or navigate to another page
      // (You can add this logic based on your UI implementation)
    } catch (error) {
      console.error('Error updating cohort:', error);
      // Handle error as needed
    }
  };
    
    
  useEffect(() => {
    // Fetch the list of cohorts when the component mounts

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
  }, []);




  return (
    <div className='cohortWraper'>
        <form className='cohortForm'>
            {loading ? <img src={spinner} alt='loading' width="10%"/> : 
            
            <div>
                <div class="mb-3">
                <h4>Update Cohort</h4>
                <label for="title" class="form-label">Cohort name</label>
                <input type="text" value={updatedCohort.name} name='name' onChange={handleChange} class="form-control" id="title" placeholder="E.g NCLEX Beginners 1"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Cohort Pre-content test link</label>
                <input type="url" value={updatedCohort.formUrl} name='formUrl' onChange={handleChange} class="form-control" id="title" placeholder="E.g www.google.."/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Cohort start date</label>
                <input type="date" value={updatedCohort.startDate} name='startDate' onChange={handleChange} class="form-control" id="title" placeholder="12/4/2023"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Cohort end date</label>
                <input type="date" value={updatedCohort.endDate} name='endDate' onChange={handleChange} class="form-control" id="title" placeholder="12/4/2023"/>
            </div>

            <div className="mb-3">
              <label htmlFor="banner" className="form-label">
                Cohort Banner
              </label>
              <input type="file" onChange={handleFileChange} name="uploads" className="form-control" id="banner"
              accept="image/jpeg, image/jpg, image/png"/>
            </div>

            </div>
            
            }
            
            
            <div class="mb-3 regBtn">
                <button onClick={handleUpdate} disabled={loading}>Update cohort</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateCohortForm