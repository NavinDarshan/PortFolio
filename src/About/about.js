import React, { Component } from "react"
import Fade from 'react-reveal/Fade';
import Navigation from '../components/Navbar'
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
import Github from './icons/Github.png'
import RestfulAPI from './icons/Restful API'
import Contact from './contact'
class about extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedThings: [],
            things: ["Java", "Html", "CSS", "BootStrap", "JavaScript", "NodeJs", "React","Redux", "Mongo","RestfulAPI","Git", "Python"],
            itemsRendered: 0,
            images: [Java, Html, CSS,BootStrap, JavaScript, NodeJS, react,Redux, Mongo,RestfulAPI,Github, Python]
        }
        this.updateRenderedThings = this.updateRenderedThings.bind(this);
    }
    componentDidMount() {
        this.scheduleNextUpdate()
    }
    scheduleNextUpdate() {
        this.timer = setTimeout(this.updateRenderedThings, 200)
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
            <div className = "bg bg-dark selectionarea" style = {{height : "400vh"}}>
                <Navigation />
                <div className="container">
                    <h2 className = "text-center text-white forfont mt-3" style = {{fontWeight : "800px"}}>MY SKILLS</h2>
                    <div>
                        <div>
                            <div className="row">{
                                this.state.renderedThings.map((thing, index) => (
                                    <div className = "col-6 col-md-3 text-center">
                                    <Fade left>
                                    <img alt = {thing} className = "forimg mt-5" src = {this.state.images[index]}></img>
                                    <p key={index} className = "text-white mt-4" style = {{fontSize : "20px"}}>{thing}</p>
                                    </Fade>
                                    </div>
                                ))
                            }</div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <Fade delay = {3000}>
                    <Contact />
                </Fade>
            </div>
        )
    }
}
export default about;

