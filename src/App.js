import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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






function App() {

  const [services, setServices] = useState([]);

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
    }) .then((res)=> res.json())
    .then((data) => {
      console.log(data, "serviceData");
      setPageCount(data.pageCount);
      setServices(data.result)
      console.log(data.pageCount)
    })
  }

  return (
    <>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Homepage services={services}/>}/>
        <Route path='/services' element={<Services services={services} 
        pageCount={pageCount} handlePageClick={handlePageClick}/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/student-registration' element={<Reg/>}/>
        <Route path='/trainer-registration' element={<TrainerReg/>}/>
        <Route path='/admin-reg' element={<RegAdmin/>}/>
        <Route path='/trainer-login' element={<TrainerLogin/>}/>
        <Route path='/admin-login' element={<LoginAdmin/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/pretest' element={<PreTest/>}/>
        <Route path="/services/:title" element={<ServicesSingle services={services}/>}/>
        <Route path='/dashboard/student' element={<Students/>}/>
        <Route path='/dashboard/trainer' element={<Trainer/>}/>
        <Route path='/dashboard/admin' element={<Admin/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </>
  );
}

export default App;
