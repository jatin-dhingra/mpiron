import React, { useState } from 'react'
import Lineleft from './Lineleft';
import './Testimonial.css'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { BsThreeDots} from "react-icons/bs";
const Testimonial = () => {

  const [testimonial,settestimonial]=useState(0);
  const [isMovingLeft, setIsMovingLeft] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const leftarrow="<-";
  const rightarrow="->";

  const testimonials=[
    {
      content:"MP Iron's craftsmanship is extraordinary. The two doors and three windows they created for my home are stunning, showcasing their exceptional skill and attention to detail. I am highly satisfied.",
      author:"Gagan D"
    },
    {
      content:"MP Iron's work is truly commendable, showcasing impeccable craftsmanship and delivering exceptional iron products that surpass expectations.",
      author:"Mulak Raj"
    },
    {
      content:"I am extremely impressed with MP Iron's products. The tractor trolleys they offer are sturdy and reliable, while their iron gates are beautifully designed and durable. I highly recommend MP Iron for their exceptional offerings.",
      author:"Latika Dhingra"
    },
    {
      content:"MP Iron's shuttering plates are outstanding in both quality and performance. Their sturdy construction and precise design make them ideal for any construction project. I am highly satisfied with MP Iron's products and would confidently recommend them for shuttering plate needs.",
      author:"Sunil Singh"
    },
    {
      content:"MP Iron offers exceptional quality shutters and plant stands. Owner Mr. Harish provides professional service, combining security, elegance, and charm, making the buying experience delightful.",
      author:"Ravi Bhutani"
    }
  ]

  const previous = () => {
    setIsFading(true);
    setTimeout(() => {
      settestimonial((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 500);
  };

  const forward = () => {
    setIsFading(true);
    setTimeout(() => {
      settestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <React.Fragment>
      <Lineleft/>
      <h1>Testimonials</h1>
      <div className='testimonial'>
       
        <div onClick={previous} className='arrow'><FiArrowLeft/></div>
        <div
          className={`testimonial-section ${
            isFading ? "fade-out" : "fade-in"
          }`}
        >
            <div className='testi-content'>{testimonials[`${testimonial}`].content}</div>
            <div className="testi-author">
              <BsThreeDots />{" "}
              <span className="author">{testimonials[`${testimonial}`].author}</span>
            </div>
            
            
        </div>
        <div onClick={forward} className='arrow'><FiArrowRight/></div>
      </div>
    
    </React.Fragment>
  )
}

export default Testimonial
