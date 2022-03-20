import React, { Component } from "react";
import { Nav, Navbar, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Dane Scozzari</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <div className="row">
                            <div className="col">
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
                                            to="/about"
                                        >
                                            Music
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link"
                                            to="/about"
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
                            </div>
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;
