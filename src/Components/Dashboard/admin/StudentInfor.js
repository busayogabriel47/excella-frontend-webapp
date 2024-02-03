import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../student/students.css"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const StudendInfo = () => {
    const [pendingStudents, setPendingStudents] = useState([]);
    const [cohorts, setCohorts] = useState([])
    const [selectedCohort, setSelectedCohort] = useState("");
    const [activatedStudents, setActivatedStudents] = useState([]);


  useEffect(() => {
    fetchPendingStudent();
    fetchCohorts()
    fetchActivatedStudents();
  }, []);

//Fetch all available cohort from the server

const fetchCohorts = async () => {
  try{
    const response = await axios.get('https://excella-api.onrender.com/api/cohorts');
    setCohorts(response.data);
  }catch(error){
    console.error('Error fetching cohort', error)
  }
}



//Fetch all pending student
  const fetchPendingStudent = async () => {
    try {
        //Retrive the admin token from the localtorage
        const adminToken = localStorage.getItem('jwt');
        const headers = {
            Authorization: `Bearer ${adminToken}`
        }
        const { data } = await axios.get("https://excella-api.onrender.com/api/pending-students", { headers });

            // Retrieve previously stored data from localStorage
            
            const studentBtnDisabled = data.map(student => ({
                ...student,
                activateBtnDisabled: student.isActive || document.cookie.includes(`activatedStudent_${student._id}=true`)
            }));

        setPendingStudents(studentBtnDisabled);
      } catch (error) {
        console.error('Error fetching pending students:', error)
      }
};


const fetchActivatedStudents = async () => {
  try {
    // Fetch the list of activated students from the backend
    const response = await axios.get(`http://localhost:5000/api/activated-students`);

    // Set the state with the list of activated students
    setActivatedStudents(response.data);
  } catch (error) {
    console.error('Error fetching activated students:', error);
  }
};



//Funcion to handle student activation
const handleActivateStudent = async (studentId, cohortId) => {
        try {

          // Check if a cohort is selected
          if (!selectedCohort) {
            toast.error('Please select a cohort before activating the student.');
            return;
          }

            //retrieve admin token from localstroage
            const adminToken = localStorage.getItem('jwt');
            const headers = {
                Authorization: `Bearer ${adminToken}`
            };

            const requestBody = {cohortId};

            console.log('Student ID:', studentId);
            console.log('Selected Cohort:', selectedCohort);

            await axios.put(`https://excella-api.onrender.com/api/activate/${studentId}`, requestBody, { headers });

            // Store activated student data in localStorage
          const activatedStudents = JSON.parse(localStorage.getItem('activatedStudents')) || [];
          const updatedStudents = [
            ...activatedStudents,
            { _id: studentId, activateBtnDisabled: true, isActive: true, cohortId }
          ];
          localStorage.setItem('activatedStudents', JSON.stringify(updatedStudents));
                     
            

          // Update the state to include the activated student
    setPendingStudents(prevStudents =>
      prevStudents.map(student =>
        student._id === studentId
          ? { ...student, activateBtnDisabled: true, isActive: true, cohortId }
          : student
      )
    );
        toast.success("Student activated successfully");

        await fetchActivatedStudents()

        } catch (error) {
            console.error('Error activating student:', error)
            toast.error('Error activating student. Please try again');
        }


        
}


//function to deactivate student
const handleDeactivateStudent = async (studentId) => {
  try{
    //retrieve admin token from local storage
    const adminToken = localStorage.getItem('jwt');
    const headers = {
      Authorization: `Bearer ${adminToken}`
    }

    //Deactivate the student
    await axios.put(`http://localhost:5000/api/deactivate-student/${studentId}`, {}, {headers})

    await fetchActivatedStudents()

    toast.success("Student deactivated successfully")
  } catch(error){
    console.error('Error deactivating student:', error);
    toast.error('Error deactivating student. Please try again')
  }
}


  return (
    <>
    <div className='download_heading py-4'>
      <div><h2>Student onboarding status</h2></div>

      <div className='assignCohort'>
        <h2>Assign student a cohort</h2>
        <select onChange={(e)=> setSelectedCohort(e.target.value)} value={selectedCohort}>
        <option value="">Select Cohort</option>
          {cohorts.map((cohort)=> (
              <option key={cohort._id} value={cohort._id}>{cohort.name}</option>
          ))}
        </select>
      </div>
        
        
    </div>
    
    <div className="files-container">
      <h2>Pending students</h2>
      <table className="files-table" style={{overflowX: "scroll"}}>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Cohort</th>
            <th>Onboarding status</th>
          </tr>
        </thead>
        <tbody>
          {pendingStudents.length > 0 ? (
            pendingStudents.map(
              ({_id, firstname, lastname, email, course, cohort, isActive }) => (
                <tr key={_id}>
                  <td className="file-title">{`${firstname} ${lastname}`}</td>
                  <td className="file-description">{email}</td>
                  <td className="file-description">{course}</td>
                  <td className="file-description">{cohort}</td>
                  <td className="file-description">{isActive ? 'Activated' : 'Pending Activation'}</td>
                  <td>{
                        !isActive ? 
                            <button onClick={()=> handleActivateStudent(_id, selectedCohort)}>Activate</button>
                        : 
                        <button onClick={()=> handleActivateStudent(_id)} disabled>Activate</button>
                    }</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No pending students..
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>


          <div className='files-container'>
          <h2>Activated Students</h2>
          <table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {activatedStudents.map(student => (
                  <tr key={student._id}>
                    <td>{student._id}</td>
                    <td>{`${student.firstname} ${student.lastname}`}</td>
                    <td>{student.email}</td>
                    <td><button onClick={()=> handleDeactivateStudent(student._id)}>Deactivate</button></td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    </>
  );
};

export default StudendInfo;