import React, { Component } from "react";
 import "./Home.css";
 import {Link } from "react-router-dom";
import MovingText from 'react-moving-text'

export default class Home extends Component {
  render() {
    return (
      <div className="Home picture">
        <div className="lander">
        <MovingText
        type="fadeInFromLeft"
        presences = "letters"
        duration="2500ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
         <h1>Home page</h1>
          <p>A portfolio website created by me and my friend Gokul Where we used </p>
          <p>to learn java first and we jumped into web development we will be </p>
          <p>doing both the front-end and the backend also</p>
        </MovingText>
        <Link to = "/about" className = "btn btn-success" >View More</Link>
        </div>
      </div>
    );
  }
}


