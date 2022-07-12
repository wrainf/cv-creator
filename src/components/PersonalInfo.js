import React, { Component } from "react";

class PersonalInfo extends Component {

  render () {
    return(
      <div>
        <div>
          <h1 contentEditable='true' id="name">Full Name</h1>
        </div>
        <div id="personal-details">
          <p contentEditable='true' id="location">Location</p>
          <p>|</p>
          <p contentEditable='true' id="phone">Phone</p>
          <p>|</p>
          <p contentEditable='true' id="email">Email</p>
        </div>
        
      </div>
    )
  }
}

export default PersonalInfo;