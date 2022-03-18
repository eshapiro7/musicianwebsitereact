import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, NavLink } from 'reactstrap';

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
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"> 
                                    Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                    About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/music">
                                    Music
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gigs"> 
                                    Gigs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                    Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Navbar>
                    </>
            );
        }
               
    }

    export default Header;