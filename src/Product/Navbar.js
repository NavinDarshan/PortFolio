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
                        <Link className="font text-white width" to="/">HOME</Link>
                        <Link className="font text-white width" to="/about">SKILLS</Link>
                        <Link className="font text-white width" to="/Contact">CONTACT</Link>
                        <Link className="font text-white width" to="/product">MY PROJECTS</Link>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default withRouter(Navigation);