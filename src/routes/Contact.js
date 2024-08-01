import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg heading="Contact me" text="lhkhanhduy.dev@gmail.com"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact