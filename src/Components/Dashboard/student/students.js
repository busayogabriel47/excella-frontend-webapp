import React, { useEffect, useState } from 'react'
import './students.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import DownloadCourse from './downloadCourse';
import download from 'downloadjs';
import axios from 'axios';
import PreTest from '../student/pretest';
import {decodeToken} from "../../../Utils/StudentAuth"
// import {loginUser} from '../../../actions/adminUser'


export default function Students() {
    const {studentId} = useParams()

    const [studentData, setStudentData] = useState(null);
    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

  
    const getFilesList = async () => {
        try {
          const { data } = await axios.get("https://excella-api.onrender.com/api/getAllFiles");
          setErrorMsg('');
          setFilesList(data);
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };

      

    useEffect(() => {

        const fetchStudentData = async () => {
            try{
                const studentDataString = localStorage.getItem("user");
                if(!studentDataString){
                    console.log("Student is not logged in");
                    return; // Exist if student is not logged in
                }

                const studentString = JSON.parse(studentDataString);
                const studentToken = studentString.token;
                console.log('studentToken:', studentToken);

                const decodedToken = decodeToken(studentToken);
                console.log('decodedToken:', decodedToken);

                if(!decodedToken || decodedToken.role !== 'student'){
                    console.log('User is not a student');
                    return; //Exist if the user is not a student
                }

                console.log('Student logged in has the role of student');

                const response = await axios.get(`https://excella-api.onrender.com/api/student/${decodedToken._id}`, {
                    headers: {
                        Authorization: `Bearer ${studentToken}`
                    }
                })
                 setStudentData(response.data);
            }catch (error) {
                console.log('Error fetching student data:', error);
            }
        }

        
        fetchStudentData()
        getFilesList();
    }, [studentId]);
  
    const downloadFile = async (id, path, mimetype) => {
      try {
        const result = await axios.get(`https://excella-api.onrender.com/api/download/${id}`, {
          responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];
        setErrorMsg('');
        return download(result.data, filename, mimetype);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrorMsg('Error while downloading file. Try again later');
        }
      }
    };   
  


  const user = localStorage.getItem("user")
 
  
    // protected route
    if(!user){
        return <Navigate to="/login"/>
    }

const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("currentUser")
    window.location.href = "/login"
}

if(!studentData){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

  const {cohorts} = studentData;


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
                                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">MENU</button>&nbsp;&nbsp;
                                    <h2 className='d-none d-md-block'>Excella Student Dashboard</h2>
                                </div>
                                <div className='d-none d-md-block logout'>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                            
                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div class="offcanvas-header">
                                    <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Student Dashboard</h4>
                                    
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    {/*Nav */}
                                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {/* <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Attendance</button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-timetable" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Time-Table</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-course" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Course outline</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-course" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"></button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-result" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Results</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-complaint" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Complain</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updates" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Notice/News</button>*/}
                                        
                                                <button class="nav-link" id="v-pills-settings-tab" 
                                                data-bs-toggle="pill" data-bs-target="#v-pills-updates" 
                                                type="button" role="tab" aria-controls="v-pills-settings" 
                                                aria-selected="false">
                                                    {
                                                    cohorts.length > 0 ? cohorts[0].name : null
                                                    }
                                                </button>
                            
                                        
                                        {/* <button class="nav-link" id="beginner-2" data-bs-toggle="pill" data-bs-target="#v-pills-beginners" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">NCLEX Beginners 2</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updates" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">NCLEX Mastery class</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-updates" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">NCLEX Roloaded class</button>  */}
                                        <button class="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill" data-bs-target="#v-pills-downloads" type="button" role="tab" aria-controls="v-pills-downloads" aria-selected="false">Downloads materials</button> 
                                        <button class="nav-link" onClick={handleLogout} type="button" >Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 pl-0'>
                            <div class="tab-content" id="v-pills-tabContent">
                                {/* Student profile*/}
                                {/* <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
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
                                {/* <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 attendance'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Attendance By</th>
                                                        <th>Status</th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>06 Aug 2022</td>
                                                        <td>admin</td>
                                                        <td>present</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06 Aug 2022</td>
                                                        <td>admin</td>
                                                        <td>present</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06 Aug 2022</td>
                                                        <td>admin</td>
                                                        <td>present</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06 Aug 2022</td>
                                                        <td>admin</td>
                                                        <td>present</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06 Aug 2022</td>
                                                        <td>admin</td>
                                                        <td>present</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="tab-pane fade" id="v-pills-timetable" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 time-table'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>9:30AM - 10:20AM</th>
                                                        <th>10:20AM - 11:10AM</th>
                                                        <th>11:10AM - 12:30PM</th>
                                                        <th>12:30PM - 1:30PM</th>
                                                        <th>1:30PM - 2:20PM</th>
                                                    </tr>
                                                    
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Monday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Tuesday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Wednesday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Thursday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Friday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Saturday</td>
                                                        <td>Maths</td>
                                                        <td>English</td>
                                                        <td>Biology</td>
                                                        <td>Physics</td>
                                                        <td>Chemistry</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>  
                                </div> */}
                                {/* <div class="tab-pane fade" id="v-pills-course" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">

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
                                </div> */}
                                {/* Complaint */}
                                {/* <div class="tab-pane fade" id="v-pills-complaint" role="tabpanel" aria-labelledby="v-pills-complaint" tabindex="0">
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
                                </div> */}

                                {/* Notice/updates */}
                                {/* <div class="tab-pane fade show active" id="v-pills-updates" role="tabpanel" aria-labelledby="v-pills-complaint" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 updates'>
                                            <div className='notice'>
                                                <h2>Public holiday Notication</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                                </p>
                                            </div>

                                            <div className='notice'>
                                                <h2>Makeup class notice</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                                </p>
                                            </div>

                                            <div className='notice'>
                                                <h2>Excella twitter space notice</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Download Course tab*/}
                                <div class="tab-pane fade" id="v-pills-downloads" role="tabpanel" aria-labelledby="v-pills-downloads" tabindex="0">
                                    <div className='row'>
                                        <div className='col-12 pl-0'>
                                                <DownloadCourse
                                                filesList={filesList}
                                                errorMsg={errorMsg}
                                                downloadFile={downloadFile}
                                                studentData={studentData}
                                                />
                                        </div>
                                    </div>
                                </div>
                                {/* NCLEX beginners 1*/}
                                <div class="tab-pane fade show active" id="v-pills-updates" role="tabpanel" aria-labelledby="v-pills-complaint" tabindex="0">
                                    <PreTest studentData={studentData}/>
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
