import React, { Component } from "react";
 import "./Home.css";
 import {Link } from "react-router-dom";
 import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import MovingText from 'react-moving-text'

export default class Home extends Component {
  render() {
    return (
      <div>
      <ScrollLock>
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
        <p>Hello I am NavinDarshan</p>
        <p>I am a Full-Stack Web developer and a Java Developer</p>
        </MovingText>
        <Link to = "/about" className = "btn btn-success" >View More</Link>
        </div>
      </div>
      </ScrollLock>
      </div>
    );
  }
}


