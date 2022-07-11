import React, { Component } from "react";

class PersonalInfo extends Component {

  render () {
    return(
      <div>
        <div>
          <h1 contentEditable="true" id="name">John Doe</h1>
        </div>
        <div>
          <p contentEditable="true" id="location">London</p>
          <p>|</p>
          <p contentEditable="true" id="phone">+44(0)1234567890</p>
          <p>|</p>
          <p contentEditable="true" id="email">john@gmail.com</p>
        </div>
        
      </div>
    )
  }
}

export default PersonalInfo;