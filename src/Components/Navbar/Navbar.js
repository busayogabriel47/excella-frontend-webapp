import "./Navbar.css";
import {Link} from 'react-router-dom'


const Navbar = () => {


return (
<div className="container">

<nav class="navbar navbar-expand-lg" id="navigation">
  <div class="container">
    <Link to="/" class="navbar-brand" href="#"><img src={require("../../images/excella-logo.png")} width="150px" alt="excella-logo"/> </Link>
    <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon top-bar"></span>
      <span class="toggler-icon middle-bar"></span>
      <span class="toggler-icon bottom-bar"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Compnay
          </a>
          <ul class="dropdown-menu dropdown-menuOne">
            <li><Link class="dropdown-item" to="/aboutus">About us</Link></li>
            
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/contactus">Contact us</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/team">Team Excella</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to="/services" class="nav-link">Services</Link>
        </li>
        
        
        <li class="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <Link to="/login"><button className="excella-btn"><i class="fa-solid fa-arrow-right-to-bracket"></i> Student</button>
        </Link> 
      </div>
      <div class="d-flex">
        {/* <Link to="/trainer-login"><button className="excella-btn2"><i class="fa-solid fa-arrow-right-to-bracket"></i> Trainer</button>
        </Link>  */}
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;