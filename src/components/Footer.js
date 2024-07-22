import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa"
import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>District 10</p>
                        <p>Ho Chi Minh City</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        0855565715 
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        lhkhanhduy.dev@gmail.com  
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Aduajskhdkajshdkjashdkjahwjkhdakjwdhwjkahdkjawhdawhd</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedinIn size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer