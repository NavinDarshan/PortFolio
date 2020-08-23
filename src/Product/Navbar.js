import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <div>
            <Navbar className="navbar-custom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        <Link className="text-white mt-2 ml-2" to="/">Home</Link>
                        <Link className="text-white mt-2 ml-3" to="/about">Skills</Link>
                        <Link className="text-white mt-2 ml-3" to="/Contact">Contact</Link>
                        <Link className="text-white mt-2 ml-3" to="/product">MyProjects</Link>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default withRouter(Navigation);