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

        <div className='owl-carousel'>
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
                    <img src={require('../../images/Kasirat.jpeg')} width="40px" alt='excella-testimonial'/>
                </div>

                <div className='itemDesc'>
                    <p>
                    My sincere appreciation goes to the tutors of EXCELLLA NURSING CONSULT towards your dedication and commitment in teaching us and simplifying all topics being taught, you all bring it down to the level that everyone can understand🥰😍
                    Truth be told, I have learnt a lot of things here. I, personally receive value for my money and I believe we all feel the same way too, so I give you all your flowers 🌼🌹🌹🌹🌼

                    </p>
                    <h4>Kasirat</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/jacinta.jpeg')} width="40px" alt='excella-testimonial'/>
                    
                </div>

                <div className='itemDesc'>
                    <p>
                    Thank you so much for all you do. Knowing about Excella came when I wasn’t sure where to begin, so that is what Excella means to me in a way; A STARTING POINT. During the free lecture days, I didn’t finish my Saunders but I read all Excella points.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Appreciation to all the bosses
                    </p>
                    <h4>Jacinta</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            <div className='itemOne'>
                <div className='itemImg'>
                    <img src={require('../../images/ijioma.jpeg')} width="40px" alt='excella-testimonial'/>
                </div>

                <div className='itemDesc'>
                    <p>
                    Knowing Excella is knowing family.
                    I sincerely want to appreciate God for this wonderful privilege, my coaches for their time and desire to see we achieve this USRN dream.
                    Honestly via Excella I've become a better version of myself, gained so much confidence as far as nursing is concerned. I know I'm very close and all thanks to Excella Coaches. You are the best.💯
                    </p>
                    <h4>Ijioma</h4>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                
            </div>

            </OwlCarousel>
        </div>
    )

}

export default Testimonial;

