import "./HomeImg.css";
import React from 'react';
import introImg from "../assets/test.jpg"
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="homeimg">
        <div className="mask">
            <img className="into-img" src={introImg} alt="Intro"/>
        </div>
        <div className="content">
            <p>Hello. I am a Front-end developer</p>
            <h1>Lê Hoàng Khánh Duy</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeImg