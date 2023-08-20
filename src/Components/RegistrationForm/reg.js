import '../RegistrationForm/reg.css'
import React,{useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import axios from 'axios'
import {StudentReg, StudentRegsignup} from './validationHook/studentvaHook'
// import { register } from '../../actions/userAction'
import clsx from 'clsx'
import styles from '../RegistrationForm/reg.css';


//Register component;
const Reg = () => {

const [students, setStudents] = useState({
  firstname: "",
  lastname:"",
  email: "",
  phone:"",
  course: "",
  contactmeans:"",
  terms: false
})


const [success, setSuccess] = useState(false)


const {errors, validationstudents, onBlurField } = StudentReg(students);



const studentChange = (e) => {
  const {name, value, type, checked} = e.target;

  const formState = {
    ...students,
    [name]: type === "checkbox" ? checked : value
  }

  setStudents(formState);

  // if(errors[name].dirty)
  // validationstudents({
  //       form: formState,
  //       errors,
  //       name
  //   })
}

const handleRegister = async(e) => {
  e.preventDefault()

  const {isValid} = validationstudents({students, errors, forceTouchErrors: true});

  if(!isValid) return;
  alert("Thanks. We have received your registration")

 await axios({
  method: 'post',
  url: 'http://localhost:5000/api/learner',
  data: students,

  headers: {
    'Content-Type': 'application/json',
  },
 }).then((response) => {
  console.log(response);
 })
 .catch((response)=> {
  console.log(response)
 })

 console.log(students)

}



  return (
    <div className='regWrapper'>

    <form className='regform' onSubmit={handleRegister}>
    <div className="regdiv">
        <h3>STUDENT REGISTRATION FORM</h3>

            <>
              {/* Firstname field*/}
            <div class="reginput">
              {errors.firstname.dirty && errors.firstname.error ? (
                <p className={styles.formError}>{errors.firstname.message}</p>
              ): null}
    
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
              value={students.firstname}
              name="firstname"
              onBlur={onBlurField}
              onChange={studentChange}
              /> 
              </div>
          
          {/* lastname lastname*/}
            <div class="reginput">

            {errors.lastname.dirty && errors.lastname.error ? (
                <p className={styles.formError}>{errors.lastname.message}</p>
              ): null}
              
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
              value={students.lastname}
              name="lastname"
              onBlur={onBlurField}
              onChange={studentChange}
              />
            </div>
          
          {/* email field*/}
            <div class="reginput">
            {errors.email.dirty && errors.email.error ? (
                <p className={styles.formError}>{errors.email.message}</p>
              ): null}
            
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
              value={students.email}
              name="email"
              onBlur={onBlurField}
              onChange={studentChange}
              /> 
              </div>
          
            {/* Phone field*/}
            <div class="reginput">
              {errors.phone.dirty && errors.phone.error ? (
                <p className={styles.formError}>{errors.phone.message}</p>
              ): null}
              
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
              value={students.phone}
              name="phone"
              onBlur={onBlurField}
              onChange={studentChange}
              />
            </div>
          
          {/* course field*/}
              <div class="">
              {errors.course.dirty && errors.course.error ? (
                <p className={styles.formError}>{errors.course.message}</p>
              ): null}
              
              <select
              className={
                clsx(
                  styles.formControl,
                  styles.formField,
                  errors.course.dirty && 
                  errors.course.error && 
                  styles.formFieldError
                )
               }
               name="course" 
               onBlur={onBlurField}
              onChange={studentChange} value={students.course} 
              id="validationCustom04" required>
                <option selected>Course type</option>
                <option value="nclx review">NCLEX REVIEW COURSE</option>
                <option value="credential services">CREDENTIAL SERVICES</option>
                <option value="nmcn verification">NMCN VERIFICATION</option>
                <option value="waec and neco">WAEC AND NECO</option>
                <option value="board of nursing">BOARD OF NURSING REG</option>
                <option value="criminal background check">CRIMINAL BACKGROUND CHECK</option>
                <option value="nmcn verification">BOARD OF NURSING REG</option>
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
              
              <select
              className={
                clsx(
                  styles.formSelect,
                  styles.formField,
                  errors.contactmeans.dirty && 
                  errors.contactmeans.error && 
                  styles.formFieldError
                )
               } onChange={studentChange} 
               onBlur={onBlurField} 
               name="contactmeans" value={students.contactmeans} id="validationCustom04" required>
                <option value="by text message">By Text Message</option>
                <option value="by email">By email</option>
                <option value="by phone call">By Phone call</option>
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
                onChange={studentChange} value={students.terms} id="invalidCheck"/>
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

export default Reg;
