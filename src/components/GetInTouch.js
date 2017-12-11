import React, { Component } from 'react';

class GetInTouch extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="get-in-touch-container">
        <div className="title">Get in Touch</div>
        <div className="sub-title">Feel free to drop us a line below!</div>

        <input type="text" className="input text-input" placeholder="Your Name" id="name-input"/>
        <input type="text" className="input text-input"  placeholder="Your Email" id="email-input"/>
        <textarea className="input textarea-input"  rows="4" height="120" placeholder="Type your message here" id="msg-input"/>

        <button className="send-btn">SEND</button>
      </div>
    );
  }
}

export default GetInTouch;
