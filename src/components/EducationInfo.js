import React, { Component } from "react";

class EducationaInfo extends Component {
  render() {
    return (
      <div id="education-section">
        <h2 contentEditable='true' >EDUCATION</h2>
        <div id="university-info">
          <h3 contentEditable='true'>University</h3>
          <h3 contentEditable='true'>Location</h3>
        </div>
        <div id="course-info">
          <h4 contentEditable='true'>Course</h4>
          <h4 contentEditable='true'>Expected Graduation:</h4>
        </div>
        <li contentEditable='true' key={'courses'}>Relevant Courses</li>
      </div>
      
    )
  }
}

export default EducationaInfo;
