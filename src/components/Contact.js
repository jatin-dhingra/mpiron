import React, { useRef } from 'react';
import './Contact.css'
import LineRight from './LineRight'
import { ImLocation } from 'react-icons/im';
import {BsFillPhoneVibrateFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const showToastMessage = () => {
      toast.success('Thank you for reaching us!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    };
  
    emailjs.sendForm('service_27ox6t8', 'template_mwyfqmt', form.current, 'POiT7isaFOuh5xl0-')
      .then((result) => {
          showToastMessage()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  
  

  return (
    <>
      <LineRight></LineRight>
      <section className='contact'>
          <div className='content'>
              <h2><span>Contact</span> us</h2>
              <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover={false}
                  theme="light"
                  />
          </div>
          <div className='containerbox'>
              <div className='contactinfo'>
                  <div className='box'>
                    <div className='icon'><ImLocation></ImLocation></div>
                    <div className='text'>
                      <h3>Address</h3>
                      <p>M.P. Iron Products, Sirmour Chauraha, Rewa, M.P.</p>
                    </div>
                  </div>
                  <div className='box'>
                    <div className='icon'><BsFillPhoneVibrateFill/></div>
                    <div className='text'>
                      <h3>Phone</h3>
                      <p>+91 9425185221</p>
                    </div>
                  </div>
                  <div className='box'>
                    <div className='icon'><AiOutlineMail/></div>
                    <div className='text'>
                      <h3>Email</h3>
                      <p>mpironrewa@gmail.com</p>
                    </div>
                  </div>
              </div>
              <div className='contactform'>
                  <form ref={form} onSubmit={sendEmail}>
                    <h2><span>Let</span> us know !</h2>
                    <div className='inputbox'>
                          <input type='text' name="user-name" required ></input>
                          <span>Name</span>
                    </div>
                    <div className='inputbox'>
                          <input type='text' name="user-email" required ></input>
                          <span>Email</span>
                    </div>
                    <div className='inputbox'>
                          <textarea required name="user-msg"></textarea>
                          <span>Message...</span>
                    </div>
                    <div className='inputbox'>
                          <input type='submit' name="" value="send" ></input>
                          
                    </div>
                  </form>
              </div>
          </div>
      </section>
    </>
  )
}

export default Contact
