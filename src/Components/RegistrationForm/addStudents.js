import '../RegistrationForm/reg.css'
import React,{useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import {reset}  from '../../reduxtk/authSlice'
import { student } from '../../reduxtk/authAction'
import {useForm} from "react-hook-form"
import {toast} from 'react-toastify'


//Register component;
const Addstudents = () => {

  const {register, handleSubmit, reset } = useForm();

    const [resetForm, setResetForm] = useState(false)

//reset input field after form submission



const dispatch = useDispatch();

const {isLoading, isSuccess, isError, user, message} = useSelector((state)=> state.auth)

useEffect(()=> {
  if(isError){
    toast.error(message)
  }

  if(isSuccess){
    toast.success(message)
  }

}, [isError, isSuccess, message, dispatch])


const submitForm = (data, e) => {
  data.email = data.email.toLowerCase()
  dispatch(student(data))
  e.target.reset()
  console.log(data)
}


  return (
    <div className='regWrapper'>

    <form className='regform' onSubmit={handleSubmit(submitForm)}>

    <div className="regdiv">
        <h3>ADD STUDENT</h3>

            {isError && <p>{isError}</p>}
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

            <input type='text'
             className="form-control"
            {...register('cohort')}
             placeholder='Cohort' required/><br/>

            <input type='text'
             className="form-control"
            {...register('class_No')}
             placeholder='Class number' required/><br/>

            {/* <div>
                <label>Admin ?</label>
                <label htmlFor='admin'>
                    Admin
                    <input type='radio'
                    value="true"
                    id='admin'
                    {...register("isAdmin", {required: true})}/>
                </label>

                <label htmlFor='NotAdmin'>
                    Not Admin
                    <input type='radio'
                    value="false"
                    id='NotAdmin'
                    {...register("isAdmin", {required: true})}/>
                </label>
            </div> */}
                
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
