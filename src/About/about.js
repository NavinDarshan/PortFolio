import React, { Component } from "react"
import Navigation from '../Product/Navbar'
import Java from './icons/Java.png';
import Python from "./icons/Python.png";
import Html from "./icons/Html"
import CSS from "./icons/CSS"
import BootStrap from './icons/BootStrap'
import JavaScript from "./icons/JavaScript"
import NodeJS from "./icons/NodeJs"
import react from "./icons/React"
import Redux from "./icons/Redux"
import Mongo from './icons/Mongo'
import RestfulAPI from './icons/Restful API'

class about extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedThings: [],
            things: ["Java", "Html", "CSS", "BootStrap", "JavaScript", "NodeJs", "react","Redux", "Mongo","RestfulAPI", "Python"],
            itemsRendered: 0,
            images: [Java, Html, CSS,BootStrap, JavaScript, NodeJS, react,Redux, Mongo,RestfulAPI, Python]
        }
        this.updateRenderedThings = this.updateRenderedThings.bind(this);
    }
    componentDidMount() {
        this.scheduleNextUpdate()
    }
    scheduleNextUpdate() {
        this.timer = setTimeout(this.updateRenderedThings, 700)
    }
    updateRenderedThings() {
        console.log(this.state);
        const itemsRendered = this.state.itemsRendered
        const updatedState = {
            renderedThings: this.state.renderedThings.concat(this.state.things[this.state.itemsRendered]),
            itemsRendered: itemsRendered + 1
        }
        this.setState(updatedState)
        if (updatedState.itemsRendered < this.state.things.length) {
            this.scheduleNextUpdate()
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    render() {
        return (
            <div className = "bg bg-dark" style = {{height : "400vh"}}>
                <Navigation />
                <div className="container">
                    <h2 className = "text-center text-white">MY SKILLS</h2>
                    <div>
                        <div>
                            <div className="row">{
                                this.state.renderedThings.map((thing, index) => (
                                    <div className = "col-4 col-md-3">
                                    <img alt = {thing} className = "mt-5" src = {this.state.images[index]} style = {{width : "100px" , height : "100px"}}></img>
                                    <div key={index} className = "mt-2 ml-4 text-white">{thing}</div>
                                    </div>
                                ))
                            }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default about;




















// import React, { Component } from "react";
// import Navigation from '../Product/Navbar';
// import './about.css';
// import java from './icons/java icon.png'
// import Delay from 'react-delay'

// class about extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             skills: ["Java", "Python"]
//         }
//     }
//     myfunction() {
//         var i = 0;
//         console.log("entered")
//         var skillset = ["python", "koltin"]
//         var temp = [];
//         temp[i] = skillset[i];
//         this.setState({ skills: temp });
//         i++;
//     }
//     timerfunction() {
//         setTimeout(() => this.myfunction(), 100);
//     }

//     //try for loop inside return but assign i outside the return
//     render() {
//         const { skills } = this.state;
//         return (
//             <div>
//                 {skills.map((skill, i) => {

//                     return (
//                         <Delay wait={2000}>
//                             <div style={{ transitionDelay: "1s" }}>
//                                 <p>{skill}</p>
//                             </div>
//                         </Delay>

//                     )

//                 })}
//             </div>
//         )
//     }
// }
// export default about;

