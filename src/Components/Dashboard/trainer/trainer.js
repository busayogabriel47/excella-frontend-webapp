import React, { useEffect } from 'react'
import '../student/students.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Tprofile from './Tprofile';
// import {loginUser} from '../../../actions/adminUser'


export default function Trainer() {
  
const dispatch = useDispatch();
const navigate = useNavigate();

//   useEffect(()=> {
//     if(localStorage.getItem("user")){
//         const userId = JSON.parse(localStorage.getItem("user")).user._id;
//         dispatch(loginUser(userId))
//     }
//   }, [])


const {currentUser} = useSelector(state => state.auth)

  
// protected route
    if(!currentUser){
        return <Navigate to="/trainer-login"/>
    }


    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('currentUser')
        window.location.href = "/trainer-login"
    }


    return (
    <div className='dashboard'>

    <div className="profile container">

            <div className='row py-5'>
                <div className='col-12'>
                    <div class="row">
                    <div className='col-12 col-md-12'>
                            {/*Dashboard Sidebar*/}
                            <div className="profileDetails">
                                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">MENU</button>
                                <h2>Excella Trainer Dashboard</h2>  <button type="button" onClick={handleLogout}>Logout</button>
                            </div>
                            
                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Dashboard Menu</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    {/*Nav */}
                                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button attenAcc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Mark Attendance
                                                </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                        <button class="nav-link" id="v-cohort-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cohort-1" type="button" role="tab" aria-controls="v-pills-cohort-1" aria-selected="false">
                                                            Cohort 1
                                                        </button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-timetable" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Upload Mark</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-course" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Notice</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-complaint" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Complain</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12'>
                            <div class="tab-content" id="v-pills-tabContent">
                                <Tprofile/>
                                {/* Mark Attendance*/}
                                
                                <div className="tab-pane fade" id="v-pills-cohort-1" role="tabpanel" aria-labelledby="v-cohort-tab">
                                    <div className='attendanceContent'>
                                            <h3>Mark Attendance</h3>
                                            <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th scope="col" className='smallCol'>Name</th>
                                            <th scope="col" className='smallCol'>Roll_No</th>
                                            <th scope="col" className='wideCol'>Cohort</th>
                                            <th scope="col" className='wideCol'>Attendance</th>
                                            </tr>
                                        </thead>
                                <tbody>
                                    <tr>
                                    
                                    <td data-bs-toggle="modal" data-bs-target="#studentModal">Mark</td>
                                    <td>3156</td>
                                    <td>2020</td>
                                    <td>
                                        <button className='bg bg-success border-0 text-white'>Present</button> &nbsp;
                                        <button className='bg bg-danger border-0 text-white'>Absent</button>
                                    </td>
                                    </tr>
                                    
                                    
                                </tbody>
                                </table>

                                <div class="modal fade" id="studentModal" tabindex="-1" aria-labelledby="studentModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="studentModalLabel">upload Mark</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body"></div>
                                    <form>
                                    
                                        <div class="mb-2">
                                    <select class="form-select" id="scores">
                                    <option selected disabled></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    </select>
                                    </div>
                                        <div class="mb-2">
                                            <input type="text" class="" id="lastName" placeholder='Subject Name'/>
                                        </div>
                                        <div class="mb-2">
                                        <input type="text" class="" id="lastName" placeholder='Mark'/>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                        </div>


                                <div class="tab-pane fade" id="v-pills-timetable" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
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

                                {/* Notice/updates */}
                                <div class="tab-pane fade" id="v-pills-updates" role="tabpanel" aria-labelledby="v-pills-complaint" tabindex="0">
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
