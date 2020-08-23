import React from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <div>
        <Navbar className="navbar-custom">
            <Navbar.Brand>My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link className = "text-white mt-2 ml-2" to = "/">Home</Link>
                    <Link  className = "text-white mt-2 ml-3"  to ="/about">About</Link>
                    <Link  className = "text-white mt-2 ml-3"  to ="/Contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default withRouter(Navigation);