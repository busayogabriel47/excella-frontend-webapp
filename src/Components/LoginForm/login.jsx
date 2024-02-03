import React,{useState, useEffect} from 'react'
import '../LoginForm/login.css'
import { Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { register } from 'react-scroll/modules/mixins/scroller'
import axios from 'axios'


const Login = () => {

  const navigate = useNavigate();



const {register, handleSubmit, reset, formState:{errors}} = useForm()
const [loading, setLoadng] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword)=> !prevShowPassword)
}
  
//redirect authenticated students to Students dashboard


const submitForm = async(data, e) => {

  setLoadng(true)

try {
  //Make api call to student login endpoint
  const response = await axios.post("https://excella-api.onrender.com/api/loginStudent", data)

  data.email = data.email.toLowerCase()

  localStorage.setItem('user', JSON.stringify(response.data))
  
  if(response.data.user.isActive){
    
    console.log('Login successful:', response.data);

    const studentId = response.data.user._id;
    

    toast.success(response.data.success);
    setTimeout(()=> {
      navigate(`/dashboard/student/${studentId}`);
    }, 4000)
    
  }else{
      toast.error(response.data.error || 'An error occurred. Ensure your login credentials are correct')
  }
  
  console.log(response.data.user.isActive)
} catch (error) {
  // Handle error
  if (error.response) {
    console.error('Server error:', error.response.data);
    // Set an error message for server errors
    toast.error(error.response.data.error || 'Invalid email or password. Please try again.');
  } else if (error.request) {
    console.log('No response from server:', error.request);
    // Set an error message for no response from server
    toast.error('No response from server. Please try again later.');
  } else {
    console.log('Request error:', error.message);
    // Set an error message for other errors
    toast.error('Request error. Please try again later.');
  }
}finally{
  // Set loading state to false regardless of success or error
  setLoadng(false);
}

}






  return (

    <>
    <div className='loginWrapper'>

       <form  className="formParent" onSubmit={handleSubmit(submitForm)}>

        <h3 className='my-3'>Welcome back! student</h3>

        <div className="topLoginForm">
           <input id='mail' 
           type="email"
          {...register("email")}
           placeholder='Email' required/>
           
           <input id='password' 
           type={showPassword ? 'text' : "password"}
            {...register("password")}
           placeholder='Password' />

            {
              showPassword ? (
                <IoMdEyeOff className='eyeOff' onClick={togglePasswordVisibility}/>
              ):(
                <IoMdEye className='eyeOn' onClick={togglePasswordVisibility}/>
              )
            }

          
          
          


        <button disabled={loading} type='submit'>
          {loading ? 
            <div class="spinner-border m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          : 'Login'}
          </button>

        
        </div>

        <p style={{color: "#030494", fontWeight: "500"}}>New enrollment? <Link to="/signup">Register here</Link></p>
       </form>
      </div>
    </>
  )
}

export default Login;
