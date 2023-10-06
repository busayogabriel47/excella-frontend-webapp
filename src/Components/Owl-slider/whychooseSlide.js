import React, {useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';
import "./whychoose.css"

function Whychoose() {

    const [slider, setSlider] = useState({
        responsive: {
            0: {
              items: 1
            },
            450: {
              items: 2
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
    })

  return (
    <div className='row owl-carousel wcuTwo' >
            <OwlCarousel className="owl-theme"
              loop={true}
              
              nav={true}
              autoplay={true}
              autoplayTimeout={5000}
              items={6}
              responsive={slider.responsive}
          >

        <div className='col-12 col-md-12 wcuColOne'>
                    <div className='wcuCard' style={{width: "22rem"}}>

                        <img src={require('../../images/certificate.png')} width="20%"/> 
                        <h6>Certificated</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Dolor debitis assumenda facilis praesentium numquam, 
                        velit animi eius ex rerum. Distinctio impedit facilis</p>
                        {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                    </div>
                </div>

            <div className='col-12 col-md-12 wcuColOne'>
                    <div style={{width: "22rem"}} id='wcuColTwo'>
                            <img src={require('../../images/nurse.png')} width="20%"/> 
                            <h6>Expert Educators</h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Dolor debitis assumenda facilis praesentium numquam, 
                            velit animi eius ex rerum. Distinctio impedit facilis</p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                    </div>
            </div>

            <div className='col-12 col-md-12 wcuColOne'>
                        <div className='wcuCard' style={{width: "22rem"}}>
                            <img src={require('../../images/care.png')} width="20%"/> 
                            <h6>Supportive Learning Environment</h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Dolor debitis assumenda facilis praesentium numquam, 
                            velit animi eius ex rerum. Distinctio impedit facilis</p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
            </div>

            <div className='col-12 col-md-12 wcuColOne'>
                        <div className='wcuCard' style={{width: "22rem"}}>
                            <img src={require('../../images/care.png')} width="20%"/> 
                            <h6>Comprehensive Resources</h6>
                            <p>When you enroll in Excella's services/courses, 
                                you gain access to comprehensive study materials, 
                                practice exams, and review courses that cover all the 
                                essential content areas tested in the NCLEX. Our 
                                resources are designed to help you build a solid foundation 
                                of knowledge and develop critical thinking skills, ensuring 
                                you are fully prepared for the NCLEX exam.
                            </p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
            </div>

            <div className='col-12 col-md-12 wcuColOne'>
                        <div className='wcuCard' style={{width: "22rem"}}>
                            <img src={require('../../images/care.png')} width="20%"/> 
                            <h6>Personalized Approach</h6>
                            <p>At Excella, we understand that each student is unique with different strengths and areas of improvement. We take a personalized approach to cater to individual needs, tailoring our resources and strategies accordingly.
                            </p>
                            {/* <button className='aBtn'>Learn More <i class="fa-sharp fa-solid fa-right-long"></i></button> */}
                        </div>
            </div>

            </OwlCarousel>

    </div>
  )
}

export default Whychoose;