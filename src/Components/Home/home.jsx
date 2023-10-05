import React from 'react';
import "./home.css";
import CountUp from 'react-countup';
import Testimonial from '../Owl-slider/testimonial';
import { Link } from 'react-router-dom';
import {Element} from "../../Newticker/newticker"



const Homepage = ({services, handleAnimationEnd, items, handleRefUpdate}) => {

    return (
        <>
        {/*-----------------Call-to-Action------------------*/}
                <div className='row'>
                    <div className='newsTicker col-12'>
                        <div className='wrapper'>
                            <div className='inner' ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
                                {items.map((obj, index)=> <Element title={obj.key} key={obj.key+index}/>)}
                            </div>      
                        </div>   
                    </div>
                    <div className='col-12 col-md-6 text-center' id="ctaBG">
                        <img src={require('../../images/nurse-girl.png')}  width="100%"/>
                    </div>
                    <div className='col-12 col-md-6 ctaSecond'>
                        <h1><span className='nurseBadge'>Nurse</span>Here <br/>For Your Care</h1>
                        <p className='my-4'>Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Asperiores nam corrupti 
                            odit saepe ducimus ipsam pariatur perferendis 
                            odio sint, minus fuga voluptas possimus 
                            sapiente quos doloribus consectetur ex 
                            corporis dolores.
                        </p>
                        <button className='lmBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='popup-youtube' href='https://www.youtube.com/watch?v=TuoNvPPnr2o'><i class="fa-solid fa-play"></i></a>
                    </div>
                </div>

            {/*-------------Appointment--------------------*/}
             
        {/* <div className='appointment'>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-12 col-md-4 appointOne'>
                        <h2>Make Appointment</h2>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
                       <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button>
                    </div>
                    <div className='col-12 col-md-8 formColumn'>
                        <form className='appointForm'>
                            <div className='field'>
                                <label htmlFor='email'>Email</label> <br/>
                                <input type="email" id="email" placeholder='Email'/>
                            </div>
                            
                            <div className='field'>
                                <label htmlFor='name'>Name</label><br/>
                                <input type="text" id="name" placeholder='Name'/>
                            </div>
                            <div className='mt-4'><button className='bookNow' type='submit'>Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}

        {/*--------------Why-Choose-Us-------------------*/}
        <div className='whyChooseUs'>
            <div className='container'>
                <div className='row wcuOne'>
                    <div className='col-12 col-md-8 mt-5'>
                        <h2>Why Choose Excella</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab optio beatae natus corrupti illo nesciunt adipisci alias, reiciendis ducimus repudiandae odio magni</p>
                    </div>
                    <div className='col-12 col-md-4 mt-5'>
                        <button className='wcuBtn'>LEARN MORE <i class="fa-sharp fa-solid fa-right-long"></i></button> 
                    </div>
                </div>


                <div className='row wcuTwo'>
                    <div className='col-12 col-md-4 wcuColOne'>
                        <div className='wcuCard' style={{width: "22rem"}}>

                        <img src={require('../../images/certificate.png')} width="20%"/> 
                        <h6>Certificated</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Dolor debitis assumenda facilis praesentium numquam, 
                        velit animi eius ex rerum. Distinctio impedit facilis</p>
                        {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
                    </div>

                    <div className='col-12 col-md-4 wcuColOne'>
                        <div style={{width: "22rem"}} id='wcuColTwo'>
                            <img src={require('../../images/nurse.png')} width="20%"/> 
                            <h6>Professional Nurse</h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Dolor debitis assumenda facilis praesentium numquam, 
                            velit animi eius ex rerum. Distinctio impedit facilis</p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
                    </div>

                    <div className='col-12 col-md-4 wcuColOne'>
                        <div className='wcuCard' style={{width: "22rem"}}>
                            <img src={require('../../images/care.png')} width="20%"/> 
                            <h6>Friendly Service</h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Dolor debitis assumenda facilis praesentium numquam, 
                            velit animi eius ex rerum. Distinctio impedit facilis</p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
                    </div>

                </div>


            </div>
        </div>


        {/* Private Coaching*/}

        <div id='privateCoaching' className='mt-5'>
            <div className='container'>
                <div className='row'>
                    {/* Private coaching column one*/}
                    <div className='col-12 col-md-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-12 p-0'>
                                        <div className='tileOne'><img src={require("../../images/student-nurse.jpg")} width="100%"/></div>
                                    </div>
                                    <div className='col-12 p-0'>
                                        <div className='tileThree'>
                                            <img src={require("../../images/private3.jpg")} width="100%"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12 p-0'>
                                            <div className='tileTwo'>
                                                <img src={require("../../images/student1.jpg")} width="100%"/>
                                            </div>
                                        </div>
                                        <div className='col-12 p-0'>
                                            <div className='tileFour'>
                                                <img src={require("../../images/private4.jpg")} width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* Private coaching column two*/}
                    <div className='col-12 col-md-6 privateTwo'>
                        <h1>Know More About Our Nursing Coaching</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <ul>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint.</li>
                        </ul>

                       <table>
                            <tr>
                                <td>
                                    <h4>Remi Mackenzie</h4>
                                </td>
                                <td>
                                    <h6>Remi Makinde</h6>
                                </td>
                            </tr>
                       </table>

                    </div>
                </div>
            </div>
        </div>



{/* Experience count */}

<div id='experience'>
    <div className='container'>
            <div className='row'>
                {/*experience CountUp col*/}
                <div className='col-12 col-md-4 yoe'>
                    <div className='youFlex'>
                        <div className='yoeInner'>
                            <img src={require('../../images/profession.png')} width="50px"/>
                        </div>
                        <div className='yoeInner'>
                            <CountUp start={0} end={23} duration={4.5} delay={1}/>
                            <p>Years of Experience</p>
                        </div>
                    </div>

                    
                </div>
                {/*expert CountUp col*/}
                <div className='col-12 col-md-4 yoe'>
                    <div className='youFlex'>
                        <div className='yoeInner'>
                            <img src={require('../../images/doctor.png')} width="50px"/>
                        </div>
                        <div className='yoeInner'>
                            <CountUp start={0} end={33} duration={4.5} delay={1}/>
                            <p>Expert Coaches</p>
                        </div>
                    </div>
                </div>

                {/* Happy Student Countup col*/}
                <div className='col-12 col-md-4 yoe'>
                    <div className='youFlex'>
                        <div className='yoeInner'>
                            <img src={require('../../images/student.png')} width="50px"/>
                        </div>
                        <div className='yoeInner'>
                            <CountUp start={0} end={99} duration={4.5} delay={1}/> <span>%</span> 
                            <p>Happy Students</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>

{/* Service We Offer*/}

<div id='service'>
    <div className='container'>
        <div className='row'>
                <div className='col-12 col-md-8 wswOffer'>
                    <h2 className='my-4'>What Service We Offer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque aut autem deleniti sunt iste culpa fugit vel cupiditate! Nesciunt error qui velit</p> 
                </div>
                <div className='col-12 col-md-4 mt-5 wswOfferBtn'>
                        <button className='wcuBtn'><Link to="/services"> SEE MORE SERVICES</Link> <i class="fa-sharp fa-solid fa-right-long"></i></button> 
                </div>
        </div>
        <div className='row'>
                {services.slice(0, 3).map((service, index)=> {
                    return(
                        <div className='col-12 col-md-4 mt-5'>
                            <div id='serviceOne' style={{backgroundImage: `url(${service.img})`}}>
                                <div className='homeCare'>
                                    <img src={service.icon} width="60px"/>
                                    <h2>{service.title}</h2>
                                    <p>{service.description.substring(0, 80)}</p>
                                    <button className='aBtn'><Link to={`/services/${service.title}`}>Learn More </Link><i class="fa-sharp fa-solid fa-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
</div>



{/*Testimonial section*/}

<div id="testimonail">
    <div className='container'>
        <div className='row my-5'>
            <div className='col-12 col-md-6 testColumnOne'>
                <div className='mb-5'>
                    <h6>TESTIMONIALS</h6>
                    <h4>Don't just take our word for it</h4>
                </div>
                <Testimonial/>
            </div>
            <div className='col-12 col-md-6 text-center'>
                <iframe className='d-block d-md-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.6950613381203!2d3.365035033246073!3d6.631893203689388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93bd9a588b63%3A0x14ac4e124cfb430b!2sMichael%20Otedola%20Jubilee%20Estate%2C%20Olowora%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686141761216!5m2!1sen!2sng" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className='d-none d-md-block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.6950613381203!2d3.365035033246073!3d6.631893203689388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93bd9a588b63%3A0x14ac4e124cfb430b!2sMichael%20Otedola%20Jubilee%20Estate%2C%20Olowora%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686141761216!5m2!1sen!2sng" width="700" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>

{/*--------Footer------*/}


</>

    )
}

export default Homepage;