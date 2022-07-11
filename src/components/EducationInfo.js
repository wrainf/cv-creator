import React, { Component } from "react";

class EducationaInfo extends Component {
  render() {
    return (
      <div id="education-section">
        <h2 contentEditable='true' >Education</h2>
        <div>
          <p contentEditable='true'>University</p>
          <p contentEditable='true'>Location</p>
        </div>
        <div>
          <p contentEditable='true'>Course</p>
          <p contentEditable='true'>Expected Graduation:</p>
        </div>
        <li contentEditable='true'>Relevant Courses</li>
      </div>
      
    )
  }
}

export default EducationaInfo;
