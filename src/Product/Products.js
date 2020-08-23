import React, { Component } from 'react';
import Navigation from './Navbar';
import contactpage from './contactHomePage.png';
import ecommercepage from './ecommerce homePage.png'
import ColorGame from './colourgame.png'
import './Products.css'

class Products extends Component {
    render() {
        return (
            <div className="bgpicture">
                <Navigation />
                <h2 className = "text-center text-white mt-3 mb-3">My Dedicated Works</h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm mb-5">
                            <div className="card bg-success">
                                <img className="card-img-top" src={ColorGame} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href = "https://navindarshan.github.io/ColorGame/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mb-5">
                            <div className="card bg-success">
                                <img className="card-img-top" src={contactpage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href = "http://navin-contacts.herokuapp.com/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mb-5">
                            <div className="card bg-success">
                                <img className="card-img-top" src={ecommercepage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href = "http://navin-ecommerce.herokuapp.com/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products;