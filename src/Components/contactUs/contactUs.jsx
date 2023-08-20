import React from 'react'
import '../contactUs/contactUs.css'
import Map from '../map/map'


const ContactUs = () => {

//state
const [status, setStatus] = React.useState("Submit");

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  const {email, name, phone, message} = e.target.elements;


  let details = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  }

  let response = await fetch("http://localhost:5000/api/contact", {
   method: 'POST',
   headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Accept": "aplication/json"
   },
   body: JSON.stringify(details), 
  });
  setStatus('Submit');
  let result = await response.json();
  alert(result.status)
}

 
  return (
   <>
<div className="ContactUs">
  <div className="imgbg">

  <div className="contact">
    <h1>Contact Us</h1>
  </div>
     </div>
     <div className="getinTouch">
     <div className="container">
      <div className="row">
        <div className="col-md-6 order-md-one">
          <div className="left">
          <h1>Get In Touch</h1>
             <p>Le Lorem Ipsum est simplement du faux texte employé dans 
                la composition et la misei</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                      <div className="contactLogo">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                      <div class="contact-info-wrapper">
                        <span class="contact-label">Phone</span>
                        <span class="contact-info">(+081)56781234</span>
                      </div>
                    </div>
                    <div class="contact-item">
                      <div className="contactLogo">
                      <i class="fa-solid fa-envelope-open-text"></i>
                      </div>
                      <div class="contact-info-wrapper">
                        <span class="contact-label">Email</span>
                        <span class="contact-info">mail@nursee.com</span>
                      </div>
                    </div>
                    <div class="contact-item">
                      <div className="contactLogo">
                      <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div class="contact-info-wrapper">
                        <span class="contact-label">Address</span>
                        <span class="contact-info">London Eye,London</span>
                      </div>
                    </div>
                    <div class="contact-item">
                      <div className="contactLogo">
                      <i class="fa-brands fa-instagram"></i>
                      </div>
                      <div class="contact-info-wrapper">
                        <span class="contact-label">Instagram</span>
                        <span class="contact-info">nurse.com</span>
                      </div>
                    </div>
            </div>

  <div className="social-media">
    <h3>Social Media</h3>
    <div className="mediaLogo">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-youtube"></i>
  </div>
  
  
 
</div>
        </div>
        </div>
        <div className="col-md-6 order-md-2">
           <div className="right">
             <div className="form">
             <form class="row g-3" onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label htmlFor="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder='Email' />
  </div>
  <div class="col-md-6">
    <label htmlFor="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="name" placeholder='Name' />
  </div>
  <div class="col-12">
    <label htmlFor="phone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="Phone"/>
  </div>
  <div class="col-12">
    <label htmlFor="message" class="form-label">Message</label>
    <input type="text" class="form-control" id="message" placeholder="Message"/>
  </div>
  <div class="col-12">
    <button type="submit">{status}</button>
  </div>
</form>
        
             </div>
        </div>
      </div>
      </div>
    </div>
      </div>
      
      <Map/>

     </div>
   </>
  )
}

export default ContactUs;
