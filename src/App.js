import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import Homepage from './Components/Home/home';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Services from './Components/Services/services';
import Aboutus from './Components/AboutUs/aboutus';
import Footer from './Components/Footer/footer';
import ContactUs from './Components/contactUs/contactUs';
import Login from './Components/LoginForm/login';
import Reg from './Components/RegistrationForm/reg';
import PreTest from './Components/pre-test/pre-test';
import ServicesSingle from './Components/ServicesSingle/ServiceSingle';
import axios from 'axios';
import Students from './Components/Dashboard/student/students';
import LoginAdmin from './Components/LoginForm/adminLogin';
import TrainerLogin from './Components/TrainerLogin/trainerLogin';
import Blog from './Components/Blog/blog'
import Trainer from './Components/Dashboard/trainer/trainer';
import Admin from './Components/Dashboard/admin/admin';
import TrainerReg from './Components/RegistrationForm/trainerReg';
import TeamPage from './Components/Team/team';
import RegAdmin from './Components/RegistrationForm/adminReg';
import newsItems from './Newticker/newticker';
import Addstudents from './Components/RegistrationForm/addStudents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailVerification from './Components/ForgetPassword/EmailVerification';
import ForgetPassword from './Components/ForgetPassword/forgetPassword';
import NewPassword from './Components/ForgetPassword/NewPassword';





function App() {

const [services, setServices] = useState([]);

const [items, setItems] = useState(newsItems);
const [animationFlow, setAnimationFlow] = useState(false)
const wrapperRef = useRef();
const indexRef = useRef();


const handleRefUpdate = useCallback(node => {
  if(node !== null && items.length > 0){
    indexRef.current = node.firstChild;
    wrapperRef.current = node;

    document.documentElement.style.setProperty('--animationDistance', `${0 -indexRef.current.offsetWidth}px`);
    document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
    wrapperRef.current.classList.add('moving');
  }
}, [items]);


const handleLoop = () => {
  wrapperRef.current.classList.remove('moving');
  wrapperRef.current.style.animation = 'none';
  const t = wrapperRef.current.offsetHeight; /* trigger reflow */
  wrapperRef.current.style.animation = null;
  shiftNext([...items]);
};


const shiftNext = (copy) => {
  const firstitem = copy.shift();
  copy.splice(copy.length, 0, firstitem);
  setItems(copy)
}

const handleAnimationEnd = () => {
  handleLoop();
}

  const serviceData = async () => {
    const result = await axios.get(
      'https://excella-api.onrender.com/api/posts'
    )
    setServices(result.data)
  }

  useEffect(()=> {
    currentPage.current=1;
    serviceData()
    getPaginate()
  }, []);


  //pagination
const [limit, setLimit] = useState(6)
const [pageCount, setPageCount] = useState(6);
const currentPage=useRef()


  const handlePageClick = (e) => {
    console.log(e) 
    currentPage.current=e.selected+1;
    getPaginate();
  }

  const getPaginate = () => {
    fetch(`https://excella-api.onrender.com/api/paginate?page=${currentPage.current}&limit=${limit}`, {
      method: 'GET',
    }).then((res)=> res.json())
    .then((data) => {
      console.log(data, "serviceData");
      setPageCount(data.pageCount);
      setServices(data.result)
      console.log(data.pageCount)
    })
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Homepage services={services} 
        handleRefUpdate={handleRefUpdate} 
        handleAnimationEnd={handleAnimationEnd} items={items}/>}/>
        <Route path='/services' element={<Services services={services} 
        pageCount={pageCount} handlePageClick={handlePageClick}/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/student-registration' element={<Reg/>}/>
        <Route path='/signup' element={<Addstudents/>}/>
        <Route path='/trainer-registration' element={<TrainerReg/>}/>
        <Route path='/admin-reg' element={<RegAdmin/>}/>
        <Route path='/trainer-login' element={<TrainerLogin/>}/>
        <Route path='/admin-login' element={<LoginAdmin/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/pretest' element={<PreTest/>}/>
        <Route path="/services/:title" element={<ServicesSingle services={services}/>}/>
        <Route path='/dashboard/student/:studentId' element={<Students/>}/>
        <Route path='/dashboard/trainer' element={<Trainer/>}/>
        <Route path='/dashboard/admin' element={<Admin/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/forgetpass' element={<ForgetPassword/>}/>    
        <Route path='/verification' element={<EmailVerification/>}/>  
        <Route path='/newpass' element={<NewPassword/>}/>    
  
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
