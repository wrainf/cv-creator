import { Component } from "react";
import AddInfo from "./components/AddInfo";
import PersonalInfo from "./components/PersonalInfo"
import EducationInfo from "./components/EducationInfo"
import Skills from './components/Skills'
import './App.css'

class App extends Component {


  render(){

    return(
      <div id="content">
        <PersonalInfo/>
        <EducationInfo/>
        <AddInfo title='WORK'/>
        <AddInfo title='PERSONAL PROJECTS'/>
        <Skills/>
        
      </div>
    
    );
  }
}

export default App;
