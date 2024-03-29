import React from 'react';
import "./home.css";
import CountUp from 'react-countup';
import Testimonial from '../Owl-slider/testimonial';
import { Link } from 'react-router-dom';
import {Element} from "../../Newticker/newticker"
import Whychoose from '../Owl-slider/whychooseSlide';



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
                        <img src={require('../../images/excella-nurse-1-short.png')}  width="70%"/>
                    </div>
                    <div className='col-12 col-md-6 ctaSecond'>
                        <h1><span className='nurseBadge'>Excella Nursing Consult</span> Your <br/>Guide to NCLEX Mastery and USA Nursing Success.</h1>
                        <p className='my-4'>
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
                        <p>Nursing students can benefit from the expertise, personalized approach, comprehensive resources, supportive learning environment, and a proven track record of success that sets us apart from our competitors.</p>
                    </div>
                    <div className='col-12 col-md-4 mt-5'>
                        <button className='wcuBtn'>LEARN MORE <i class="fa-sharp fa-solid fa-right-long"></i></button> 
                    </div>
                </div>

                <Whychoose/>

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
                                        <div className='tileOne'><img src={require("../../images/excellanurse6.jpeg")} width="100%"/></div>
                                    </div>
                                    <div className='col-12 p-0'>
                                        <div className='tileThree'>
                                            <img src={require("../../images/excellanurse2.jpeg")} width="100%"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12 p-0'>
                                            <div className='tileTwo'>
                                                <img src={require("../../images/excellanurse7.png")} width="100%"/>
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
                        <p>Dear Nurses, As the CEOs/Directors of Excella Nursing Consult, we are excited to share with you the exceptional courses we offer at our academy. At Excella, our mission is to empower internationally trained nurses and aspiring nursing professionals to excel in their careers and achieve their goals.
                        </p>
                        <ul>
                            <li>Personalized Approach: Receive a tailored learning experience that caters to your individual needs, strengths, and areas for improvement.</li>
                            <li>Networking Opportunities: Connect with fellow nursing professionals, build relationships</li>
                        </ul>

                       <table>
                            <tr>
                                <td>
                                    <h4>Odira Iheoma</h4>
                                </td>
                                <td>
                                    <h4>Evelyn Anasioke</h4>
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
                            <CountUp start={0} end={5} duration={4.5} delay={1}/>
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
                                    <img src={service.icon} width="60px" alt=''/>
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
            
                <iframe className='d-block d-md-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220431.6469208566!2d-82.06194748773972!3d37.978231281068744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia%2C%20USA!5e0!3m2!1sen!2sng!4v1698535304465!5m2!1sen!2sng" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className='d-none d-md-block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220431.6469208566!2d-82.06194748773972!3d37.978231281068744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia%2C%20USA!5e0!3m2!1sen!2sng!4v1698535304465!5m2!1sen!2sng" width="700" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>

{/*--------Footer------*/}


</>

    )
}

export default Homepage;