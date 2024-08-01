import { Link } from "react-router-dom"
import "./AboutContent.css"
import shopee from "../assets/shopee.jpg"
import flutter from "../assets/flutter.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a Front-end developer</p>
            <Link to="/contact">
                <button className="btn">Contact me</button>
            </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={shopee} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
              <img src={flutter} className="img" alt="true"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent