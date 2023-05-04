import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Music from "./MusicComponent";
import GigCopy from "./GigCopy";
import Contact from "./ContactComponent";
import Videos from "./VideoComponent";
import Photos from "./PhotoComponent";
import { Switch, Redirect, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/gigs">
            <GigCopy />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;
