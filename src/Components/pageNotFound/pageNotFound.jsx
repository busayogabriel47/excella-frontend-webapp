import React from 'react'
import '../pageNotFound/pageNotFound.css'

const PageNotFound = () => {
  return (
    <>
        <div className="pagenotfound">
            <div className="imgbg">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <div className='navbar-header'>
    <a class="navbar-brand" href="#">Nursee</a>
    <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon top-bar"></span>
      <span class="toggler-icon middle-bar"></span>
      <span class="toggler-icon bottom-bar"></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
      <div className="navbarLogo">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-youtube"></i>
    </div>
    </div>
   
  </div>
</nav>
      <div className="oops">
        <h1>404</h1>
        <h5>Oops..Page Not Found !</h5>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans
        Le Lorem Ipsum est  la composition
                la composition et la misei</p>
                <button type='submit'><i class="fa-solid fa-house"></i> BACK HOME</button>
      </div>

            </div>

            <div className="templates">
          <div className='subTemplates'>
           <div className="nursee">
            <h1>Nursee</h1>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans 
        la composition et la mise en page avant impression</p>
        <span> <i class="fa-solid fa-location-dot"></i> London Eye, London UK</span>

           </div>
           <div className="Navigation">
            <h6>Navigation</h6>
            <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Services</li>
            </ul>
            <span> <i class="fa-solid fa-phone"></i>(+081) 5678 1234</span>
           </div>
           <div className="quick-link">
            <h6>Quick Link</h6>
            <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Booking Us</li>
            <li>Pages</li>
            </ul>
            <span> <i class="fa-solid fa-envelope-open-text"></i>mail@nursee.com</span>
           </div>
           <div className="services">
            <h6>Services</h6>
            <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>404</li>
            </ul>
              <span>
              <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
              </span>
           </div>
            </div>
           <div className='final'>
           <p>
  <span><i class="fas fa-circle"></i></span> 2022 Nursee Templates 
  <span><i class="fas fa-circle"></i></span> All Rights Reserved
</p>

           </div>
        </div>
            
        </div>
      
    </>
  )
}

export default PageNotFound;
