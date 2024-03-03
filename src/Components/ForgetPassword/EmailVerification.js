import React,{useState, useEffect, useRef} from 'react'
import '../LoginForm/login.css'
import { Link, Navigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import "./reset.css";


import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { register } from 'react-scroll/modules/mixins/scroller'
import axios from 'axios'


const EmailVerification = () => {

  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [verificationStatus, setVerificationStatus] = useState(null)

  const inputRefs = useRef([]);
  const navigate = useNavigate()
  
  const handleSubmit= async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const otp = verificationCode.join('');

      const token = localStorage.getItem('passresettoken');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const res = await axios.post('http://localhost:5000/api/reset-password', {otp: token}, config);
      console.log('Verification successful', res.data);
      setVerificationStatus(res.data);

      toast.success("Verification successful!");

    } catch (error) {
      toast.error('Verification failed.')
      console.log('Verification failed', error)
    }

    setLoading(false)
  }


  const handleChange = (e, index) => {
    const { value } = e.target;
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    // Move focus to the next input
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };







  return (

    <>
    <div className='loginWrapper'>

       <form  className="formParent" onSubmit={handleSubmit}>

        <h3 className='my-3'>Verification</h3>

        <div className="topLoginForm">
            <label htmlFor='email'>Enter Verification code</label>

           <div className='blockInput'>
                
           {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength='1'
                name={`digit-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                required
                style={{ border: "1px solid #000", width: '2rem', textAlign: 'center' }}
              />
            ))}
          </div>       
          
        <p style={{color: "#030494", fontWeight: "500"}}>If you dont recieve a code!<Link to="/signup">Resend</Link> </p>
 
        <button disabled={loading} type='submit'>
            {loading ? 'Verifying...' : 'Verify'}
          </button>

        
        </div>

        <p style={{color: "#030494", fontWeight: "500"}}>New enrollment? <Link to="/signup">Register here</Link></p>
       </form>
      </div>
      {verificationStatus === 'success' && <Navigate to="/reset-password"/>}
    </>
  )
}

export default EmailVerification;
