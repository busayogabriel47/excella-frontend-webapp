import '../RegistrationForm/reg.css'
import React,{useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import axios from 'axios'
import {SignupRegsignup} from './validationHook/trainerHook'
// import { register } from '../../actions/userAction'
import clsx from 'clsx'
import styles from '../RegistrationForm/reg.css';


//Register component;
const TrainerReg = () => {

const [signup, setSignup] = useState({
  firstname: "",
  lastname:"",
  email: "",
  phone:"",
  education: "",
  gender: "",
  contactmeans:"",
  terms: false
})
const [success, setSuccess] = useState(false)

const {errors, validationtrainers, onBlurField } = SignupRegsignup(signup);



const handleChange = (e) => {
  const {name, value, type, checked} = e.target;

  const formState = {
    ...signup,
    [name]: type === "checkbox" ? checked : value
  }

  setSignup(formState);

  // if(errors[name].dirty)
  // validationsignup({
  //       form: formState,
  //       errors,
  //       name
  //   })
}

const handleSubmitTrainer = async(e) => {
  e.preventDefault()

  const {isValid} = validationtrainers({signup, errors, forceTouchErrors: true});

  if(!isValid) return;
  alert("Thanks. We have received your registration")

 await axios({
  method: 'post',
  url: 'http://localhost:5000/api/trainer',
  data: signup,

  headers: {
    'Content-Type': 'application/json',
  },
 }).then((response) => {
  console.log(response);
 })
 .catch((response)=> {
  console.log(response)
 })

}



  return (
    <div className='regWrapper'>

    <form className='regform' onSubmit={handleSubmitTrainer}>
    <div className="regdiv">
        <h3>TRAINER REGISTRATION FORM</h3>

            <>
              {/* Firstname field*/}
            <div class="reginput">
              {errors.firstname.dirty && errors.firstname.error ? (
                <p className={styles.formError}>{errors.firstname.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
            <input type="text"
             className={
              clsx(
                styles.formControl,
                styles.formField,
                errors.firstname.dirty && 
                errors.firstname.error && 
                styles.formFieldError
              )
             }
              id="validationCustom02"
              placeholder='First name'
              value={signup.firstname}
              name="firstname"
              onBlur={onBlurField}
              onChange={handleChange}
              /> 
              </div>
          
          {/* lastname lastname*/}
            <div class="reginput">

            {errors.lastname.dirty && errors.lastname.error ? (
                <p className={styles.formError}>{errors.lastname.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
              <input type="text"
              className={
                clsx(
                  styles.formControl,
                  styles.formField,
                  errors.lastname.dirty && 
                  errors.lastname.error && 
                  styles.formFieldError
                )
               }
              id="validationCustom02"
              placeholder='Last name'
              value={signup.lastname}
              name="lastname"
              onBlur={onBlurField}
              onChange={handleChange}
              />
            </div>
          
          {/* email field*/}
            <div class="reginput">
            {errors.email.dirty && errors.email.error ? (
                <p className={styles.formError}>{errors.email.message}</p>
              ): null}
            <label className='asterisk'>*</label> &nbsp;
            <input type="email"
             className={
              clsx(
                styles.formControl,
                styles.formField,
                errors.email.dirty && 
                errors.email.error && 
                styles.formFieldError
              )
             }
              id="validationCustom02"
              placeholder='Email'
              value={signup.email}
              name="email"
              onBlur={onBlurField}
              onChange={handleChange}
              /> 
              </div>
          
            {/* Phone field*/}
            <div class="reginput">
              {errors.phone.dirty && errors.phone.error ? (
                <p className={styles.formError}>{errors.phone.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
            <input type="text"
             className={
              clsx(
                styles.formControl,
                styles.formField,
                errors.phone.dirty && 
                errors.phone.error && 
                styles.formFieldError
              )
             }
              id="validationCustom02"
              placeholder='Phone Number'
              value={signup.phone}
              name="phone"
              onBlur={onBlurField}
              onChange={handleChange}
              />
            </div>
          
          {/* Education field*/}
              <div class="">
              {errors.education.dirty && errors.education.error ? (
                <p className={styles.formError}>{errors.education.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
              <select
              className={
                clsx(
                  styles.formControl,
                  styles.formField,
                  errors.education.dirty && 
                  errors.education.error && 
                  styles.formFieldError
                )
               }
               name="education" 
               onBlur={onBlurField}
              onChange={handleChange} 
              value={signup.education} 
              id="validationCustom04" required>
                <option selected>Educational Qualification</option>
                <option value="SSCE">Secondary School Leaving Certificate</option>
                <option value="ND">National Diploma</option>
                <option value="HND">Higher National Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Master">Master Degree</option>
                <option value="Doctorate">Doctorate Degree</option>
              </select>
            </div>
          
          {/* Contactmeans field*/}
            <div>
              <h4>How would you like how to be contacted</h4>
            </div>
            <div class="">
            {errors.contactmeans.dirty && errors.contactmeans.error ? (
                <p className={styles.formError}>{errors.contactmeans.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
              <select
              className={
                clsx(
                  styles.formSelect,
                  styles.formField,
                  errors.contactmeans.dirty && 
                  errors.contactmeans.error && 
                  styles.formFieldError
                )
               } onChange={handleChange} 
               onBlur={onBlurField} 
               name="contactmeans" value={signup.contactmeans} id="validationCustom04" required>
                <option value="by text message">By Text Message</option>
                <option value="by email">By email</option>
                <option value="by phone call">By Phone call</option>
              </select>
            </div>
            
            {/* Gender field*/}
            <div class="">
              {errors.gender.dirty && errors.gender.error ? (
                <p className={styles.formError}>{errors.gender.message}</p>
              ): null}
              <label className='asterisk'>*</label> &nbsp;
              <select
              className={
                clsx(
                  styles.formControl,
                  styles.formField,
                  errors.gender.dirty && 
                  errors.gender.error && 
                  styles.formFieldError
                )
               }
               name="gender" 
               onBlur={onBlurField}
              onChange={handleChange} value={signup.gender} 
              id="validationCustom04" required>
                <option selected>Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* terms field*/}
            <div class="">
              <div class="form-check">
              {errors.terms.dirty && errors.terms.error ? (
                <p className={styles.formError}>{errors.terms.message}</p>
              ): null}
                <input
                className={
                  clsx(
                    styles.formSelect,
                    styles.formField,
                    errors.terms.dirty && 
                    errors.terms.error && 
                    styles.formFieldError
                  )
                 }
                 onBlur={onBlurField}
                class="form-check-input" 
                type="checkbox" name='terms' 
                onChange={handleChange} value={signup.terms} id="invalidCheck"/>
                <label class="form-check-label" for="invalidCheck">
                <small>I agree to the <span>Terms and Conditions</span></small>
                </label>
              </div>
            </div>

            <div class="regBtn">
              <button class="" type="submit">Request an appointment</button>
            </div>
          </>

          </div>
        </form>
    </div>
  )
}

export default TrainerReg;
