import React, { Component } from "react";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
