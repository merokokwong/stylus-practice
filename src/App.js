import React, { Component } from 'react'
import 'sanitize.css'
import './css/style.css'
import Contact from './components/Contact.js'
import GetInTouch from './components/GetInTouch.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-form">
          <Contact />
          <GetInTouch />
        </div>
      </div>
    );
  }
}

export default App;
