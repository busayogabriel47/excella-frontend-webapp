import '../RegistrationForm/reg.css'
import React,{useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import {reset}  from '../../reduxtk/authSlice'
import { AdminReg } from '../../reduxtk/authAction'
import {useForm} from "react-hook-form"
import {toast} from 'react-toastify'


//Register component;
const RegAdmin = () => {

  const {register, handleSubmit, reset } = useForm();

    const [resetForm, setResetForm] = useState(false)

  const [addfile, setAddFile] = useState({
    files: ""
  })

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
  dispatch(AdminReg(data))
  e.target.reset()
  console.log(data)
}


  return (
    <div className='regWrapper'>

    <form className='regform' onSubmit={handleSubmit(submitForm)}>

    <div className="regdiv">
        <h3>ADMIN ? CREATE ACCOUNT</h3>

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
             
             <input type='text'
             className="form-control"
            {...register('phone')}
             placeholder='Phone' required/><br/>

            <input type='text'
            className="form-control"
            {...register('branch')}
             placeholder='Your Branch' required/><br/>

            <input type='text'
            className="form-control"
            {...register('city')}
             placeholder='City' required/><br/>


            <div>
                <label>Admin ?</label> &nbsp;
                <label htmlFor='true'>
                    True &nbsp;
                    <input
                        type='radio'
                        value="true"
                        id='true'
                        {...register('isAdmin', { required: true})}
                    />
                </label> &nbsp;

                <label htmlFor='false'>
                    False &nbsp;
                    <input
                        type='radio'
                        value="true"
                        id='false'
                        {...register('isAdmin', { required: true})}
                    />
                </label>

            </div>
            
                
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

export default RegAdmin;
