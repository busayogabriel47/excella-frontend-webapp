import React, {useRef, useState, useEffect} from 'react';
import '../Services/services.css'
import '../contactUs/contactUs.css'
import Reg from '../RegistrationForm/reg';
import { Link } from 'react-scroll';

import axios from 'axios'
import ServicesList from '../servicesList/serviceList';



const Services = ({services, pageCount, handlePageClick={handlePageClick}}) => {

const ref = useRef(null);



const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};


return(
        
<>  
<div id='servicePage'>
    
    <div className='row'>
           <div className='col-12 serviceCol text-center'>
                    <h1>Services</h1>
            </div>     
    </div>
    <div className='container'>
        <div className='row mt-5'>
            
              <div className='col-12 col-md-8 wswOffer'>
                  <h2 className='my-4'>What Service We Offer</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque aut autem deleniti sunt iste culpa fugit vel cupiditate! Nesciunt error qui velit</p> 
              </div>
              <div className='col-12 col-md-4 mt-5'>
                  <button className='wcuBtn'><Link to="application" spy={true} smooth={true}>REGISTER</Link> <i class="fa-sharp fa-solid fa-right-long"></i></button> 
                </div>
          
        </div>
    
          
      <ServicesList services={services} pageCount={pageCount} handlePageClick={handlePageClick}/>

    </div>
</div>


{/* General Question */}

<div id='questionNanswer'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6 general'>
                <h1>General Questions</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div> 

            <div className='col-12 col-md-6'>
                
            
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How to Change my Photo from Admin Dashboard?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How to Change my Password easily?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How to Change my Subscription Plan using PayPal
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
            
                
            </div> 
        </div>
    </div>
</div>


{/* Register for Services*/}


<Reg/>

</>     
    )
}

export default Services