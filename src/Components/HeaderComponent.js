import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavItem,
  Jumbotron,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <div className="container">
            <div className="row dane-scozzari">
              <h1>
                <Link to="/home">Dane Scozzari</Link>
              </h1>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky="top" expand="xs">
          <div className="container">
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className="nav-link" to="/music">
                  Music
                </NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Media
                </DropdownToggle>
                <DropdownMenu className="drop-down" right>
                  <DropdownItem>
                    <NavLink className="nav-link" to="/music">
                      Music
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <NavLink className="nav-link" to="/photos">
                      Photos
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <NavLink className="nav-link" to="/videos">
                      Videos
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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

            <span className="navbar-text ml-auto">
              <a
                className="btn btn-social-icon btn-instagram"
                href="https://www.instagram.com/djdangerousdane/"
                target={"_blank"}
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
                target={"_blank"}
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-spotify"
                href="https://open.spotify.com/album/3Bz940oeHMYiROMq0Ni2m7?si=tb0KwE3XR7qVoq8_IiHTiQ"
                target={"_blank"}
              >
                <i className="fa fa-spotify" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
                target={"_blank"}
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
