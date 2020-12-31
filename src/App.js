import { Component } from 'react';
import './App.css';
import {checkColor} from 'the-simplest-color-checker'
class App extends Component {
  componentDidMount(){
    checkColor({
      selector: ".colors_box", //add any selector
      optimize_text_color: true, //change text color depending on the background
      ifDark:{
        textColor:"#f00"
      },
      ifLight:{
        textColor:"#00f"
      }
    })
  }
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <div className="boxes">
                <span data-color="#000" className="colors_box">color box</span>
                  <span data-color="#fff" className="colors_box">color box</span>
                  <span data-color="#0f0" className="colors_box">color box</span>
                  <span data-color="#00f" className="colors_box">color box</span>
                  <span data-color="#f00" className="colors_box">color box</span>
              </div>
            </header>
          </div>
        );
    }
}

export default App;
