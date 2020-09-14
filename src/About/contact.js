import React, { Component } from 'react'
import "./about.css";
import CV from './Resume.pdf'
class contact extends Component {
    render() {
        return (
            <div style = {{backgroundColor : "deepskyblue" , padding : "40px"}}>
                <h5 className="text-white text-center forfont">There is no failure except in no longer trying,It always seems impossible until it's done.</h5>
                <div className="text-center">
                    <a className = "resume text-center" href={CV} target="_blank" rel="noopener noreferrer"><i className="far fa-file-pdf foricon"/><label className = "ml-3" style = {{fontSize : "30px"}}>MY CV</label></a><br/>
                    <a className="text-center foricon mr-4" href="mailto:navindarshanvec@gmail.com" target="blank"><i className="far fa-envelope"></i></a>
                    <a className="text-center foricon" href="https://github.com/NavinDarshan" target="blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        )
    }
}
export default contact;