import { Component } from "react";
import AddInfo from "./components/AddInfo";
import PersonalInfo from "./components/PersonalInfo"
import EducationInfo from "./components/EducationInfo"

class App extends Component {


  render(){

    return(
      <div id="content">
        <PersonalInfo/>
        <EducationInfo/>
        <div id="add-info">
          <AddInfo title='Work'/>
        </div>
      </div>
    
    );
  }
}

export default App;
