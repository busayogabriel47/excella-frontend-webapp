import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../LoginForm/login.css'
import { Link, useLocation } from 'react-router-dom'

import { trainerLogin } from '../../reduxtk/authAction'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { register } from 'react-scroll/modules/mixins/scroller'


const TrainerLogin = () => {

  // const [email, setEmail] = useState("")
  // const [passsword, setPassword] = useState("")

  const {error, userInfo, success, loading} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();



const {register, handleSubmit, reset} = useForm()
  
  
//redirect authenticated trainers to trainer dashboard


const submitForm = (data) => {
  dispatch(trainerLogin(data)).then(
    (result)=> {
      if(result.payload){
        navigate('/dashboard/trainer')
      }else if(error){
        console.log(error)
      }
    }
  )
}


// const handleSubmit=(e) => {
// e.preventDefault()

// dispatch(userLogin({email, passsword})).then((result)=> {
//   if(result.payload){
//       setEmail("")
//       setPassword("")
//       navigate('/dashboard/trainer')
//   }
// })


// }




  return (

    <>
    <div className='loginWrapper'>
      {success && <p>{success}</p>}
       <form  className="formParent" onSubmit={handleSubmit(submitForm)}>

        <h3 className='my-3'>Login as Trainer</h3>

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
        
           <p>Register as a Trainer <Link to="/trainer-registration">Here</Link> </p>
       </form>
      </div>
    </>
  )
}

export default TrainerLogin;
