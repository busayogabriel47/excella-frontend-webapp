import './aboutus.css';
import '../contactUs/contactUs.css';
import React from 'react';

const Aboutus = () => {

    return(


<div>
<div className='row'>
           <div className='col-12 AboutCol text-center' style={{backgroundImage: `url{"https://images.pexels.com/photos/7970851/pexels-photo-7970851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}`}}>
                    <h1>About Us</h1>
            </div>     
            </div>

<div className='aboutUs'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                        <div className='whyUs'>
                            <h1 className='mb-5'>Why Us?</h1>

                            <p>
                                To provide a safe and enjoyable environment for all of our clients and work with our clients to achieve the results to services they request, while focusing their hair, nail, and skin health.
                            </p>

                            <p>
                                Sample text. Click to Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pharetra magna ac placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem. Egestas tellus rutrum tellus pellentesque eu tincidunt. Neque vitae tempus quam pellentesque nec.
                            </p>

                </div>

                <div className='aboutDetails mt-5'>
                        <div class="contact-item">
                        <div className="contactLogo">
                            <i class="fa-solid fa-phone"></i> &nbsp;
                        
                            <span class="contact-info">(+081)56781234</span>
                        </div>
                        </div>
                        <div class="contact-item">
                        <div className="contactLogo">
                        <i class="fa-solid fa-envelope-open-text"></i> &nbsp;
                            <span class="contact-info">mail@nursee.com</span>
                        </div>
                        </div> 
                    </div>

                    <div className='aboutDetails'>
                    <div class="contact-item">
                      <div className="contactLogo">
                        <i class="fa-solid fa-location-dot"></i> &nbsp;
                        <span class="contact-info">London Eye,London</span>
                      </div>
                    </div>
                    <div class="contact-item">
                      <div className="contactLogo">
                      <i class="fa-brands fa-instagram"></i> &nbsp;
                        <span class="contact-info">nurse.com</span>
                      </div>
                    </div>
                    </div>
                </div>


                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='ourStory'>
                                <h1>Our Mission</h1>

                                <p>
                                EXCELLA NURSING CONSULT IS HERE TO SUPPORT NURSES GLOBALLY IN THEIR CAREER GOALS. HELPING CANDIDATES SUCCEED IN THEIR LICENSURE EXAMINATION. WE GUIDE CANDIDATES FROM THE BEGINNING OF THEIR IMMIGRATION JOURNEY UNTIL
                                </p>
                            </div>

                            <div className='ourStory'>
                                <p>
                                THEY ARRIVE IN THEIR DREAM LAND TO PRACTICE THEIR PROFESSION TO THE FULLEST. 
OUR SUCCESS HAS ALWAYS BEEN BASED ON THE HIGH LEVEL OF KNOWLEDGE, UNDERSTANDING, AND EXCELLENT COACHING SKILLS FOR NURSES SEEKING TO ADVANCE IN THEIR CAREERS.
                                </p>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='ourStory'>
                                <h1>Our Vision</h1>

                                <p>
                                    Egestas purus viverra accumsan in nisl nisi. Enim nec dui nunc mattis enim ut. Consequat interdum varius sit amet mattis vulputate enim nulla. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
                                </p>
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

export default Aboutus;