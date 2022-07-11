import React, { Component } from "react";

class EducationaInfo extends Component {
  render() {
    return (
      <div id="education-section">
        <h2 contentEditable='true' >Education</h2>
        <div>
          <h3 contentEditable='true'>University</h3>
          <h3 contentEditable='true'>Location</h3>
        </div>
        <div>
          <h4 contentEditable='true'>Course</h4>
          <h4 contentEditable='true'>Expected Graduation:</h4>
        </div>
        <li contentEditable='true'>Relevant Courses</li>
      </div>
      
    )
  }
}

export default EducationaInfo;
