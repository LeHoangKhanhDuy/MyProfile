import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg heading="About" text="My name is Le Hoang Khanh Duy, and I graduated in Software Engineering from the Ho Chi Minh City University of Foreign Languages – Information Technology - HUFLIT."/>
      <Footer/>
    </div>
  )
}

export default About