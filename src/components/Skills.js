import React, { Component } from "react";

class Skills extends Component {

  render () {
    return(
      <div id="skills-section">
        <h2 contentEditable='true' >SKILLS & INTERESTS</h2>

        <div>
          <strong contentEditable='true'>Skills: </strong>
          <p contentEditable='true'>Skill 1</p>
        </div>

        <div>
          <strong contentEditable='true'>Interests: </strong>
          <p contentEditable='true'>Interest 1</p>
        </div>
        
      </div>
    )
  }
}

export default Skills;