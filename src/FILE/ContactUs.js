import React, { Component } from 'react';
import '../CSS/ContactUs.css'

export default class ContactUS extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div style={{display: 'flex' }}>
          {/* <div className="mapLogo">
              <LogoName/>
          </div> */}

          <div className="mapH1">
            <h1>Get in Touch</h1>
          </div>
          </div>


         <div className="centerDiv">

            <div className="container ">
              <form style={{width:"500px", height:"500px", border: 'none'}}>
              

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '170px'}}></textarea>

            <input type="submit" value="Submit"/>


              </form>
            </div> 
            

            <div className="mapDiv2">
                {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.6419803130545!2d70.45486381591498!3d21.535749298741518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580368e103d179%3A0x87b48d4037b1e153!2sGanesh%20Garment!5e0!3m2!1sen!2sin!4v1588330261393!5m2!1sen!2sin" 
                style={{width:"700px", height:"550px", border: 'none'}} ></iframe>       */}
            </div>

        </div> 

      </div>
    );
  }
}
