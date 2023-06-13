import React from 'react'
import img from '../images/welcome.jpg'
import './Welcome.css'
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll'

const Welcome = () => {
  return (
    <React.Fragment >
      
        <Element id='welcome' name='welcome'>
                  <div className='welcome'>
                  
                  <img className='image' src={img} alt=""></img>
                  <div className='content'>
                    <div className='headings'>
                      <Typewriter 
                        options={{
                          strings: ['<span>Welcome</span> to MP Iron Products!'],
                          autoStart: true,
                          loop: true,
                          
                          wrapperClassName:'headings'
                        }}
                      
                      />
                    </div>
                    {/* <div className='heading'><span>Welcome</span> to MP Iron Products<span>!</span></div> */}
                    <div className='parah'>Welcome to MP Iron Products, the best source 
                    for all your iron needs! We specialize in the fabrication of high-quality
                    iron products, ranging from cast-iron piping to railings and structural support products.
                      Our experienced team and machinists are dedicated to producing top-of-the-line iron products that exceed
                      industry standards. From custom orders to large-scale projects. heir commitment to precision, durability,
                        and superior craftsmanship sets them apart. MP Iron Products understands the diverse needs of different industries
                        and strives to deliver products that not only exude elegance and style but also offer unmatched strength and reliability.
                          With a focus on customer satisfaction, they have earned a reputation for excellence in the iron industry, we can handle any job.
                          Visit us today and let us help you find the perfect iron solution for your needs</div>
                  </div>
              </div>
        </Element>
      
    </React.Fragment>
  )
}

export default Welcome
