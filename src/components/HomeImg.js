import "./HomeImg.css";
import React from 'react';
import introImg from "../assets/background.png"
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="homeimg">
        <div className="mask">
            <img className="into-img" src={introImg} alt="Intro"/>
        </div>
        <div className="content">
            <p>Hello. I am a ReactJS developer.</p>
            <h1>ReactJS</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeImg