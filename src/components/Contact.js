import React, { Component } from 'react';

const contacts = [
  {
    icon: "fa fa-map-marker",
    text: "23, Avenue de Paris 75012"
  },
  {
    icon: "fa fa-envelope-o",
    text: "hello@mikechemrdian.com"
  },
  {
    icon: "fa fa-skype",
    text: "mike.chemrdian"
  },
  {
    icon: "fa fa-mobile",
    text: "+3361953044"
  }
]

const contactList = contacts.map((contact) => {
  return(
    <div className="contact-info" key={contact.icon}>
      <i className={contact.icon} aria-hidden="true"></i>
      <span>{contact.text}</span>
    </div>
  )
})

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="contact-container">
        <div className="title">Contact Us</div>
        {contactList}

        <div className="icon-list">
          <a href="">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
