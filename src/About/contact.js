import React , {Component} from 'react'
import "./about.css"
import Navigation from '../Product/Navbar'

class contact extends Component{
    render(){
        return(
            <div className = "bg bg-dark">
            <Navigation />
            <div className = "forcontact">
            <a className = " d-flex justify-content-start forbox pr-2 pl-2" href = "mailto:navindarshanvec@gmail.com" target = "blank"><i className="far fa-envelope icon foricon pr-2 pl-2"></i><label className = " text-white  text-white pl-2 mt-2">Mailme</label></a><br/>
            <a className = " d-flex justify-content-start forbox mt-4 pr-2 pl-2" href = "https://linkedin.com/in/navin-darshan" target = "blank"><i className="fab fa-linkedin-in icon icon pr-2 pl-2"></i><label className = " text-white  text-white pl-2 mt-2">My Linkdein</label></a><br/>
            <a className = " d-flex justify-content-start forbox mt-4 pr-2 pl-2" href = "https://stackoverflow.com/users/14151336/navin-darshan" target = "blank"><i className="fab fa-stack-overflow icon pr-2 pl-2"></i><label className = " text-white pl-2 mt-2">My Stackoverflow</label></a><br/>
            <a className = " d-flex justify-content-start forbox mt-4 pr-2 pl-2" href = "https://github.com/NavinDarshan" target = "blank"><i className="fab fa-github icon pr-2 pl-2"></i><label className = " text-white pl-2 mt-2">My Github</label></a>
            </div>
            </div>
        )
    }
}
export default contact;