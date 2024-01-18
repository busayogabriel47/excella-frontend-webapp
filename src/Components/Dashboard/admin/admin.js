import React, { useEffect, useState, useRef } from 'react'
import '../student/students.css';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddStudents from '../../RegistrationForm/addStudents';
import AddTrainers from '../../RegistrationForm/addTrainer';
import CourseUploads from './course-uploads';
import StudendInfo from './StudentInfor';
import { upload } from '@testing-library/user-event/dist/upload';
import axios from 'axios';
import AddCohort from './AddCohort';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {

    const [file, setFile] = useState(null);
    const [previewScr, setPreviewScr] = useState("")

    const[inputState, setInputState] = useState({
        title: "",
        description: "",
        cohortId: ""
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreview, setIsPreview] = useState(false);
    const dropRef = useRef();


    const handleInput = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

//Call this function when you click on file upload button
const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { title, description} = inputState;
      const cohortId = inputState.cohortId;
      console.log("Current Cohort ID in State:", inputState.cohortId);

      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);
          formData.append('cohortId', cohortId);  //include cohortId in the FormData
  
          setErrorMsg('');
          await axios.post("https://excella-api.onrender.com/api/upload", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          );

          toast.success("Material uploaded successfully")
        } else {
            toast.error("Material upload failed. try again.")
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

//update border color when image is drag into the
//upload area
const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

//onDrop function for drop files
const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewScr(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreview(uploadedFile.name.match(/\.(jpeg|jpg|png|mp4|mp3)$/));
  };
  
const dispatch = useDispatch();


//   useEffect(()=> {
//     if(localStorage.getItem("user")){
//         const userId = JSON.parse(localStorage.getItem("user")).user._id;
//         dispatch(loginUser(userId))
//     }
//   }, [])

const {currentUser} = useSelector(state => state.auth)

  
    // protected route
    if(!currentUser){
        return <Navigate to="/admin-login"/>
    }

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "/admin-login"
    }


    return (
    <div className='dashboard'>

    <div className="profile container">
            <div className='row'>
                <div className='col-12'>
                    <div class="row">
                        <div className='col-12 col-md-12'>
                            {/*Dashboard Sidebar*/}
                            <div className="profileDetails">
                                <div className='dashMenu'>
                                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">MENU</button>
                                    &nbsp;&nbsp;<h2 className='d-none d-md-block'>Excella Admin Dashboard</h2>
                                </div>

                                <div className='d-none d-md-block logout'>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                                
                            </div>
                            
                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Admin Dashboard</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {/* <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button> */}
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Student</button>
                                        {/* <button class="nav-link" id="v-pills-trainer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-trainer" type="button" role="tab" aria-controls="v-pills-trainer" aria-selected="false">Add Trainer</button> */}
                                        <button class="nav-link" id="v-pills-studentInfo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-studentInfo" type="button" role="tab" aria-controls="v-pills-studentInfo" aria-selected="false">Student Info</button>
                                        <button class="nav-link" id="v-pills-uploads-tab" data-bs-toggle="pill" data-bs-target="#v-pills-uploads" type="button" role="tab" aria-controls="v-pills-uploads" aria-selected="false">Upload materials</button>
                                        <button class="nav-link" id="v-pills-cohort-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cohort" type="button" role="tab" aria-controls="v-pills-cohort" aria-selected="false">Add Cohorts/Classes</button>
                                        {/*<button class="nav-link" id="v-view-trainer-tab" data-bs-toggle="pill" data-bs-target="#v-view-trainer" type="button" role="tab" aria-controls="v-view-trainer" aria-selected="false">View Trainers</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-course" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Course outline</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-result" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Results</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-complaint" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Complain</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updates" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Upload Notice</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-logout" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Logout</button> */}
                                    
                                </div>
                            </div>
                            </div>
                        <div className='col-12 col-md-12'>
                            <div class="tab-content" id="v-pills-tabContent">
                                {/* Profile tab
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                    <h2>John Doe</h2>
                                    <div className='row productB mt-4'>
                                        <div className='col-12 col-md-4 mt-4 profileOne text-center'>
                                            <img src={require('../../../images/customer.jpg')}/>
                                            <i class="fa-regular fa-pen-to-square"></i>

                                            <div className='upload mt-5'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                                <input type="file" class="form-control" id="inputGroupFile01"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 mt-4 profileTwo'>
                                            <table className='profileTb'>
                                                <tbody>
                                                    <tr>
                                                        <td>First name:</td>
                                                        <td>Busayo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Last name:</td>
                                                        <td>Omotuka</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cohort:</td>
                                                        <td>January</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of birth:</td>
                                                        <td>08/10/1994</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td>omotukabusayo22@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone Number:</td>
                                                        <td>+234-8061646491</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td>20, williams crescent</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Add Student */}
                                
                                <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 attendance'>
                                            <AddStudents/>
                                        </div>
                                    </div>
                                </div>
                                {/* Add Trainer */}
                                <div class="tab-pane how" id="v-pills-trainer" role="tabpanel" aria-labelledby="v-pills-trainer-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 attendance'>
                                            <AddTrainers/>
                                        </div>
                                    </div>
                                </div>
                                {/* Studen infor*/}
                                <div class="tab-pane how" id="v-pills-studentInfo" role="tabpanel" aria-labelledby="v-pills-studentInfo-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 attendance'>
                                            <StudendInfo/>
                                        </div>
                                    </div>
                                </div>
                                {/* Upload Course Materials*/}
                                <div class="tab-pane fade" id="v-pills-uploads" role="tabpanel" aria-labelledby="v-pills-uploads-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 attendance'>
                                            <CourseUploads 
                                            handleInput={handleInput}
                                            handleSubmit={handleSubmit}
                                            inputState={inputState}
                                            previewScr={previewScr}
                                            file={file}
                                            setFile={setFile}
                                            setInputState={setInputState}
                                            errorMsg={errorMsg}
                                            setErrorMsg={setErrorMsg}
                                            isPreview={isPreview}
                                            setIsPreview={isPreview}
                                            setPreviewScr={setPreviewScr}
                                            onDrop={onDrop}
                                            dropRef={dropRef}
                                            updateBorder={updateBorder}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*View Student*/}
                                <div class="tab-pane fade" id="v-pills-timetable" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 time-table'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Serial No.</th>
                                                        <th>First name</th>
                                                        <th>Last name</th>
                                                        <th>Phone Number</th>
                                                        <th>Gender</th>
                                                        <th>Cohort</th>
                                                        <th>Profile pics</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1.</td>
                                                        <td>Busayo</td>
                                                        <td>Omotuka</td>
                                                        <td>07061646491</td>
                                                        <td>Male</td>
                                                        <td>August</td>
                                                        <td></td>
                                                        <td>
                                                            <button className='bg bg-success border-0 text-white'>Edit</button> &nbsp;
                                                            <button className='bg bg-danger border-0 text-white'>Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>  
                                </div>

                                {/*View Trainers*/}
                                <div class="tab-pane fade" id="v-view-trainer" role="tabpanel" aria-labelledby="v-view-trainer-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 time-table'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Serial No.</th>
                                                        <th>First name</th>
                                                        <th>Last name</th>
                                                        <th>Phone Number</th>
                                                        <th>Gender</th>
                                                        <th>Trainer Id</th>
                                                        <th>Profile pics</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1.</td>
                                                        <td>Busayo</td>
                                                        <td>Omotuka</td>
                                                        <td>07061646491</td>
                                                        <td>Male</td>
                                                        <td>234</td>
                                                        <td></td>
                                                        <td>
                                                            <button className='bg bg-success border-0 text-white'>Edit</button> &nbsp;
                                                            <button className='bg bg-danger border-0 text-white'>Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>  
                                </div>
                                <div class="tab-pane fade" id="v-pills-course" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">

                                </div>
                                <div class="tab-pane fade" id="v-pills-result" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                    <h2>Your result sheet</h2>
                                    <div className='row mt-5'>
                                        <div className='col-12 attendance'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Subject</th>
                                                        <th>Mark</th>
                                                        <th>Grade</th>
                                                        <th>Point</th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Mathematics</td>
                                                        <td>67</td>
                                                        <td>B</td>
                                                        <td>7</td>
                                                    </tr>

                                                    <tr>
                                                        <td>English</td>
                                                        <td>56</td>
                                                        <td>C</td>
                                                        <td>6</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Physics</td>
                                                        <td>80</td>
                                                        <td>A</td>
                                                        <td>9</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Chemistry</td>
                                                        <td>90</td>
                                                        <td>A</td>
                                                        <td>10</td>
                                                    </tr>

                                                    <tr>
                                                        <td>General Studies</td>
                                                        <td>60</td>
                                                        <td>B</td>
                                                        <td>7</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* Complaint */}
                                <div class="tab-pane fade" id="v-pills-complaint" role="tabpanel" aria-labelledby="v-pills-complaint" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 complaint'>
                                            <form>
                                                <div class="form-group mb-4">
                                                    <input type="email" class="form-control" placeholder="title"/>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Your complain here'></textarea>
                                                </div>
                                                <div className='form-group'>
                                                    <button className='btn btn-lg'>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* Upload Cohorts/Classes */}
                                <div class="tab-pane fade" id="v-pills-cohort" role="tabpanel" aria-labelledby="v-pills-cohort" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 cohort'>
                                            <div className='addCohort'>
                                                <AddCohort/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
