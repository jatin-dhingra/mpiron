import React from 'react';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardFooter,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';
import './Services.css'

import services1 from '../images/services1.webp'
import services2 from '../images/services2.jpg'
import services3 from '../images/services3.webp'

export default function Services() {
  return (
    <React.Fragment>
      <div className='entire-content'>
      
        <div className='services'>Our Prestigious <span>Services!</span></div>
        <div className='card'>
          
          <div className='card-section'>
            <div className='image-div'>
              <img src={services1}></img>
            </div>
            <div className='content-wrapper'>
              <div className='content-div'>Iron Fabrication</div>
              <div className='content-description'>Our team of skilled fabricators will create custom iron pieces for your business, ensuring quality and durability. From railings to gates, we have you covered.</div>
              {/* <button className='button-div'>know more</button> */}
            </div>
           
          </div>

          <div className='card-section'>
            <div className='image-div'>
              <img src={services2}></img>
            </div>
            
            <div className='content-wrapper'>
              <div className='content-div'>Iron Tree Guards</div>
              <div className='content-description'>We deliver the variable size of tree guards ensuring the curvature will be of variable size and strength depending upon the customer requirements</div>
              {/* <button className='button-div'>know more</button> */}
            </div>
            
          </div>

          <div className='card-section'>
            <div className='image-div'>
              <img src={services3}></img>
            </div>
            <div className='content-wrapper'>
              <div className='content-div'>Iron Beds and Windows</div>
              <div className='content-description'>Construction of the Iron Beds , Gates and many more constructable products available upon the customers order</div>
              {/* <button className='button-div'>know more</button> */}
            </div>
            
          </div>
          
        </div>
        <div className='services'>And many <span>more...</span> </div>
      </div>
    </React.Fragment>
  );
}