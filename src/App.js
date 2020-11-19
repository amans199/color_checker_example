import logo from './logo.svg';
import './App.css';

import {checkColor} from 'the-simplest-color-checker'
import { Component } from 'react';

class App extends Component {
  componentDidMount(){
    checkColor({
      selector: ".colors_box", //add any selector
      optimize_text_color: true, //change text color depending on the background
    })
  }
      render() {
      
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          <div className="boxes">
            <span data-color="#000" className="colors_box">color box</span>
              <span data-color="#fff" className="colors_box">color box</span>
              <span data-color="#0f0" className="colors_box">color box</span>
              <span data-color="#00f" className="colors_box">color box</span>
              <span data-color="#f00" className="colors_box">color box</span>
          </div>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
}
}

export default App;
