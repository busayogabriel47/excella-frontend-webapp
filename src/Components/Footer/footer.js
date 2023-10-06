import { Link } from 'react-router-dom';
import './footer.css';


const Footer = () => {

    return(
        
        <div className='excellaFooter'>

<div className='container'>
    <div className='row text-white'>
            <div className="col-12 col-md-3 my-5 fLogo">
                <img src={require('../../images/excella-logo.png')} width="300px"/>
                <p>At Excella's Nursing Consultant, we prioritize your success in the NCLEX exams. Our dedicated team of experienced instructors and Nursing professionals is here to guide and support you every step of the way.</p>

                <i class="fa-solid fa-location-dot mt-5"></i> <span>Virginia, USA</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Navigation</h2>
                <ul>
                    <li><Link className="f_link" to="/">Home</Link></li>
                    <li><Link className="f_link" to="/team">Team Excella</Link></li>
                    <li><Link className="f_link" to="/aboutus">About Us</Link></li>
                    <li><Link className="f_link" to="/services">Services</Link></li>
                </ul>

                <i class="fa-solid fa-phone mt-5"></i> <span>(+154)094-485-59</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Quick Link</h2>
                <ul>
                    <li><Link className="f_link" to="/contactus">Contact Us</Link></li>
                    <li><Link className="f_link" to="/faq">FAQs</Link></li>
                    <li><Link className="f_link" to="/">Booking</Link></li>
                    <li><Link className="f_link" to="/">Pages</Link></li>
                </ul>

                <i class="fa-solid fa-envelope-open-text mt-5"></i> <span>excellanursingconsult@gmail.com</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Services</h2>
                <ul>
                    <li><Link className="f_link" to="/">Home</Link></li>
                    <li><Link className="f_link" to="/contactus">Contact</Link></li>
                    <li><Link className="f_link" to="/blog">Blog</Link></li>
                    <li><Link className="f_link" to="/notfound">404</Link></li>
                </ul>

                <div className='mt-5 socials'>
                    <a href='https://www.facebook.com/profile.php?id=100092034570133&mibextid=ZbWKwL' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://instagram.com/excellanursing?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                
            </div>
    </div>

    
</div>

</div>
    )
}

export default Footer;