import React, {Component} from 'react';
import Header from './Components/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
  return (
    <Router>
      <div className='App'>
        < Header />
      </div>
    </Router>
  );
  }
}

export default App;
