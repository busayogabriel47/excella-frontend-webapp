import './footer.css';


const Footer = () => {

    return(
        
        <div className='excellaFooter'>

<div className='container'>
    <div className='row text-white'>
            <div className="col-12 col-md-3 my-5 fLogo">
                <img src={require('../../images/excella-logo.png')} width="300px"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>

                <i class="fa-solid fa-location-dot mt-5"></i> <span>London Eye, London Uk</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Navigation</h2>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>

                <i class="fa-solid fa-phone mt-5"></i> <span>(+081) 5678 1234</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Quick Link</h2>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Booking</li>
                    <li>Pages</li>
                </ul>

                <i class="fa-solid fa-envelope-open-text mt-5"></i> <span>(+081) 5678 1234</span>
            </div>

            <div className="col-12 col-md-3 my-5 navigation">
                <h2>Services</h2>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>404</li>
                </ul>

                <div className='mt-5 socials'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                
            </div>
    </div>

    
</div>

</div>
    )
}

export default Footer;