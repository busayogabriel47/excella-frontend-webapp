import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../LoginForm/login.css'
import { Link, useLocation } from 'react-router-dom'

import { adminLogin } from '../../reduxtk/authAction'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { register } from 'react-scroll/modules/mixins/scroller'


const LoginAdmin = () => {

  const {error, userInfo, success, loading} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();



const {register, handleSubmit, reset} = useForm()
  
  
//redirect authenticated trainers to trainer dashboard


const submitForm = (data) => {
  dispatch(adminLogin(data)).then(
    (result)=> {
      if(result.payload){
        navigate('/dashboard/admin')
      }else if(error){
        console.log(error)
      }
    }
  )
}




  return (

    <>
    <div className='loginWrapper'>
      {success && <p>{success}</p>}
       <form  className="formParent" onSubmit={handleSubmit(submitForm)}>

        <h3 className='my-3'>Admin? Sign in</h3>

        <div className="topLoginForm">
           <input id='mail' 
           type="email"
          {...register("email")}
           placeholder='Email' required/>
           
           <input id='password' 
           type="password"
            {...register("password")}
           placeholder='Password' />

        <button type='submit'>{loading ? 'Loading...': 'Login'}</button>

        {error && (<p className='alert alert-danger' role='alert'>{error}</p>)}
        </div>
        
       </form>
      </div>
    </>
  )
}

export default LoginAdmin;
