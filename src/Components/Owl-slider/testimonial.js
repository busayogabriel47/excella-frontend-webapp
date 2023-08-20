
import React, {useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';





const Testimonial = () => {

    const [slider, setSlider] = useState({
        responsive: {
            0: {
              items: 1
            },
            450: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
    })

    return (

        <div className='ctmial owl-carousel' id='customer-testimonials'>
            <OwlCarousel className="owl-theme"
              loop={true}
              
              nav={true}
              autoplay={true}
              autoplayTimeout={5000}
              items={5}
              responsive={slider.responsive}
          >
            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/customer.jpg')} width="40px"/>
                    
                </div>

                <div className='itemDesc'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4>Remi Mackenzie</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/customer.jpg')} width="40px"/>
                    
                </div>

                <div className='itemDesc'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4>Remi Mackenzie</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/customer.jpg')} width="40px"/>
                    
                </div>

                <div className='itemDesc'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4>Remi Mackenzie</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/customer.jpg')} width="40px"/>
                    
                </div>

                <div className='itemDesc'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4>Remi Mackenzie</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>
            </OwlCarousel>
        </div>
    )

}

export default Testimonial;

