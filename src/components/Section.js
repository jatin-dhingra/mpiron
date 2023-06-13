import React from 'react'
import './Section.css'
import section from '../images/section.jpg'
import Lineleft from './Lineleft'
import LineRight from './LineRight'
const Section = () => {
  return (
    <React.Fragment>
      <Lineleft></Lineleft>
      <div className='welcome1'>
        <div className='content1'>
            <div className='heading1'>
              <span>Iron</span> Grilled Windows, Covers and lot more<span>...</span>
            </div>
            <div className='parah1'>
            MP Iron Products is a leading supplier of high-quality iron products and services. we deliver high quality array of exquisite iron-crafted items. From elegant window beds to intricate fabricated creations, their craftsmanship knows no bounds. With sturdy iron frames and meticulous attention to detail, these items combine durability and style. Adorn your space with timeless iron pieces that blend aesthetics with strength, making a lasting impression.
            </div>
          </div>
        
          <img className='image1' src={section} alt=""></img>
        
        
      </div>
      <LineRight></LineRight>
    </React.Fragment>
  )
}

export default Section
