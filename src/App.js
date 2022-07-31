import React, { Component } from "react";
import Main from "./Components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
