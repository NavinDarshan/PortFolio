import React, { Component } from 'react';
import Navigation from '../components/Navbar';
import contactpage from './contactHomePage.png';
import ecommercepage from './ecommerce homePage.png'
import ColorGame from './colourgame.png'
import './Products.css'
import Roll from 'react-reveal/Roll';
import Contact from '../About/contact';
import Picture from './quotepicture.jpg';

class Products extends Component {
    render() {
        return (
            <div className = "totalbody" style = {{height : "100%"}}>
            <div className="bgpicture">
                <Navigation />
                <h2 className = "text-center text-white mt-5 mb-3 forfont">MY DEDICATED WORKS</h2>
                <Roll left duration = {2000}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={ColorGame} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Colour Game</h5>
                                    <p className="card-text">This is a simple funny game to guess the colour from the given color code</p>
                                    <a href = "https://navindarshan.github.io/ColorGame/" target = "blank" className = "btn btn-primary d-flex justify-content-center" >View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={contactpage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Contact App</h5>
                                    <p className="card-text">A simple app just to store your contacts from anyplace and anywhere</p>
                                    <a href = "http://navin-contacts.herokuapp.com/" target = "blank" className = "btn btn-primary d-flex justify-content-center">View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={ecommercepage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ecommerce App</h5>
                                    <p className="card-text">A Simple demo ecommerce app which we can buy your lovely items</p>
                                    <a href = "http://navin-ecommerce.herokuapp.com/" target = "blank" className = "btn btn-primary d-flex justify-content-center">View Site</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </Roll>
                <Contact />
                <img src = {Picture} alt="loading" height = "400px" width = "1500px"/>
            </div>
            </div>
        )
    }
}
export default Products;