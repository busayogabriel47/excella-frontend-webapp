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


const ForgetPassword = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')



const handleSubmit = async(e) => {

  e.preventDefault()

  setLoading(true)

  try {
    const response = await axios.post('http://localhost:5000/api/reset-password/request-token', { email });
    const {token, message} = response.data

    localStorage.setItem('passresettoken', token)
    console.log('Response data:', response.data)

    setMessage(message);
    
  } catch (error) {
    console.error('Error:', error);
    setMessage('Error requesting password reset. Please try again later.');
  }

  setLoading(false);


}






  return (

    <>
    <div className='loginWrapper'>

       <form  className="formParent" onSubmit={handleSubmit}>

        <h3 className='my-3'>Forget Password</h3>

        <div className="topLoginForm">
            <label htmlFor='email'>Enter Email Address</label>
           <input 
           id='mail' 
           type="email"
           value={email}
          onChange={(e)=> setEmail(e.target.value)}
           placeholder='Email' required style={{border: "1px solid #000"}}/>
                 
          
        <p style={{color: "#030494", fontWeight: "500"}}><Link to="/signup">Back to signin</Link> </p>
 
          <button disabled={loading} type='submit'>
          {loading ? 
            <div class="spinner-border m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          : 'Send'}
          </button>

        
        </div>

        <p style={{color: "#030494", fontWeight: "500"}}>New enrollment? <Link to="/signup">Register here</Link></p>
        
       </form>
      </div>
    </>
  )
}

export default ForgetPassword;
