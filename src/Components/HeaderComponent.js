import React, { Component } from "react";
import { Nav, Navbar, NavItem, Jumbotron } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1><Link to='/home'>Dane Scozzari</Link></h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/home"
                                        >
                                            <i className="fa fa-home fa-lg" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/about"
                                        >
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/music"
                                        >
                                            Music
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/gigs"
                                        >
                                            Gigs
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                           
                            
                            <span className="navbar-text ml-auto">
                            
                                <a
                                    className="btn btn-social-icon btn-instagram"
                                    href="http://instagram.com/"
                                >
                                    <i className="fa fa-instagram" />
                                </a>{" "}
                                <a
                                    className="btn btn-social-icon btn-facebook"
                                    href="http://www.facebook.com/"
                                >
                                    <i className="fa fa-facebook" />
                                </a>{" "}
                                <a
                                    className="btn btn-social-icon btn-spotify"
                                    href="http://spotify.com/"
                                >
                                    <i className="fa fa-spotify" />
                                </a>{" "}
                                <a
                                    className="btn btn-social-icon btn-google"
                                    href="http://youtube.com/"
                                >
                                    <i className="fa fa-youtube" />
                                </a>
                
                            </span>
                        
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;
