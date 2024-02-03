import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {decodeToken} from "../../../Utils/AdminAuthDecode"
import spinner from "../../../images/spinner-2.gif"
import axios from 'axios'



function AddCohortForm() {

    const [cohort, setCohort] = useState({
        name: '',
        formUrl: '',
        startDate: '',
        endDate: ''
    })
    const [banner, setBanner] = useState(null);
    
    const [loading, setLoading] = useState(false)
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setCohort({...cohort, [name]: value}) 
    }
    const handleFileChange = (e) => {
      if (e.target.files.length > 0) {
        setBanner(e.target.files[0]);
    }
  };
    
    
    const handleSubmit = async(e)=> {
        e.preventDefault();
    
            setLoading(true)
        try{
            //Get the admin token from the local storage
            const adminToken = localStorage.getItem('jwt')
            


            // Create FormData object
            const formData = new FormData();
            formData.append('name', cohort.name);
            formData.append('formUrl', cohort.formUrl);
            formData.append('startDate', cohort.startDate);
            formData.append('endDate', cohort.endDate);
            formData.append('uploads', banner); // 'cohortBanner' should match the field name in your multer setup

      // Log FormData object for debugging
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }


//Make a post request to add a new cohort
      const response = await axios.post('https://excella-api.onrender.com/api/add-cohort', formData, {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    'Content-Type': 'multipart/form-data', // Specify the content type as multipart/form-data
                  },
                });
    
              console.log(cohort)
              console.log(banner)
            console.log('Cohort added successfully:', response.data);
            toast.success('Cohort added successfuly');
        }catch(error){
            console.error('Error adding cohort:', error);
          toast.error('Error adding cohort. Please try again.');
        }finally{
            setLoading(false)
        }
    }
    
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
        <form className='cohortForm' onSubmit={(e)=>handleSubmit(e)}>
            {loading ? <img src={spinner} alt='loading' width="10%"/> : 
            
            <div>
                <div class="mb-3">
                <h4>Add new cohort</h4>
                <label for="title" class="form-label">Cohort name</label>
                <input type="text" value={cohort.name} name='name' onChange={handleChange} class="form-control" id="title" placeholder="E.g NCLEX Beginners 1"/>
            </div>
            {/* <div class="mb-3">
                <label for="title" class="form-label">Cohort Pre-content test link</label>
                <input type="url" value={cohort.formUrl} name='formUrl' onChange={handleChange} class="form-control" id="title" placeholder="E.g www.google.."/>
            </div> */}
            <div class="mb-3">
                <label for="title" class="form-label">Cohort start date</label>
                <input type="date" value={cohort.startDate} name='startDate' onChange={handleChange} class="form-control" id="title" placeholder="12/4/2023"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Cohort end date</label>
                <input type="date" value={cohort.endDate} name='endDate' onChange={handleChange} class="form-control" id="title" placeholder="12/4/2023"/>
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
                <button type='submit' disabled={loading}>Add cohort</button>
            </div>
        </form>
    </div>
  )
}

export default AddCohortForm