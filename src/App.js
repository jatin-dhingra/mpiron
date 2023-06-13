import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Section from './components/Section'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Scroll from 'react-scroll'

const App = () => {

  const ScrollLink = Scroll.ScrollLink
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Welcome ></Welcome>
      
       <Section></Section>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </React.Fragment>
  )
}

export default App
