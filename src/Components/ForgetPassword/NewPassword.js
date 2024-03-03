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


const NewPassword = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [newPassword, setNewpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')



const handleSubmit = async(e) => {

  e.preventDefault()

  if(newPassword !== confirmPassword){
    toast.error('Password do not match');
    return;
  }


  setLoading(true)
  

  try {
    const token = localStorage.getItem('passresettoken')
    console.log(token)

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post('http://localhost:5000/api/new-password', 
    
    { 
      otp: token,
      newPassword,
      confirmPassword 
    }, config);

    console.log(response.data)

    toast.success("You password was reset successfully! try to login")

  navigate('/login')
  } catch (error) {
    console.error('Error:', error);
    toast.error('Error requesting password reset. Please try again later.');
  }

  setLoading(false);


}






  return (

    <>
    <div className='loginWrapper'>

       <form  className="formParent" onSubmit={handleSubmit}>

        <h3 className='my-3'>New Password</h3>

        <div className="topLoginForm">
            <label htmlFor='email'>Enter New Password</label>
           <input 
           id='mail' 
           type="password"
           value={newPassword}
          onChange={(e)=> setNewpassword(e.target.value)}
           placeholder='8 symbols at least' required style={{border: "1px solid #000"}}/>
                 

        <label htmlFor='email'>Confirm Password</label>
           <input 
           id='mail' 
           type="password"
           value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}
           placeholder='********' required style={{border: "1px solid #000"}}/>

         
          <button disabled={loading} type='submit'>
          {loading ? 
            <div class="spinner-border m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          : 'Submit'}
          </button>

        
        </div>

        <p style={{color: "#030494", fontWeight: "500"}}>New enrollment? <Link to="/signup">Register here</Link></p>
        
       </form>
      </div>
    </>
  )
}

export default NewPassword;
