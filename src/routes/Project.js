import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg heading="PROJECT" text="Some of my recent projects"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project