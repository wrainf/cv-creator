import { Component } from "react";
import AddInfo from "./components/AddInfo";
import PersonalInfo from "./components/PersonalInfo"
import EducationInfo from "./components/EducationInfo"
import './App.css'

class App extends Component {


  render(){

    return(
      <div id="content">
        <PersonalInfo/>
        <EducationInfo/>
        <div id="add-info-section">
          <AddInfo title='WORK'/>
          <AddInfo title='PERSONAL PROJECTS'/>
        </div>
      </div>
    
    );
  }
}

export default App;
