import '../RegistrationForm/reg.css'
import React,{useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import {reset}  from '../../reduxtk/authSlice'
import {useForm} from "react-hook-form"
import {toast} from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';


//Register component;
const Addstudents = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm();
  const [isLoading, setIsLoading] = useState(false)

const submitForm = async(data, e) => {

  data.email = data.email.toLowerCase()

try {
  //Make api call to student login endpoint
  const response = await axios.post("https://excella-api.onrender.com/api/addStudent", data)
  
  toast.success("Registration successful")
  console.log('Login successful:', response.data);
} catch (error) {
  if(error.response){
    console.error('Server error:', error.response.data);
    toast.error("Registration failed, try again")
  }else if(error.request){
    console.log('No response from server:', error.request)
  }else{
    console.log('Request error:', error.message)
  }
}


}


  return (
    <div className='regWrapper'>

    <form className='regform' onSubmit={handleSubmit(submitForm)}>

    <div className="regdiv">
        <h3>ADD STUDENT</h3>

            <input type='text'
            className="form-control"
            {...register('firstname')}
             placeholder='First name' required/> <br/>
            <input type='text'
            className="form-control"
            {...register('lastname')}
             placeholder='Last name' required/> <br/>
            <input type='email'
            className="form-control"
            {...register('email')}
             placeholder='email' required/><br/>
            <input type='password'
            className="form-control"
            {...register('password')}
             placeholder='Password' required/><br/>
             <input type='date'
             className="form-control"
            {...register('dob')}
             placeholder='Date of birth' required/><br/>
             
             <input type='text'
             className="form-control"
            {...register('phone')}
             placeholder='Phone' required/><br/>

            <input type='text'
             className="form-control"
            {...register('course')}
             placeholder='Course enrolled' required/><br/>

                
            <div className='regBtn'>
                  <button type='submit' disabled={isLoading}>
                      {isLoading ? <span class="visually-hidden">Loading...</span> : "Register" }
                  </button>
            </div>
          </div>
        </form>

    </div>
  )
}

export default Addstudents;
