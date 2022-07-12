import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      info: {
        title: '',
        role: '',
        duration: '',
        description: '',
        achievement: '',
        lesson: '',
        id: uniqid(),
      },
      infos: [],
    }

    this.addInfo = this.addInfo.bind(this);
  }



  setNewTitle = (e) => {
    this.setState({
      info: {
        title: e.target.value,
        role: this.state.info.role,
        duration: this.state.info.duration,
        description:this.state.info.description ,
        achievement: this.state.info.achievement,
        lesson: this.state.info.achievement,
        id: this.state.info.id,
      }
    });
  };

  setNewRole = (e) => {
    this.setState({
      info: {
        title: this.state.info.title,
        role: e.target.value,
        duration: this.state.info.duration,
        description: this.state.info.description,
        achievement: this.state.info.achievement,
        lesson: this.state.info.lesson,
        id: this.state.info.id,
      }
    });
  };

  setNewDuration = (e) => {
    this.setState({
      info: {
        title: this.state.info.title,
        role: this.state.info.role,
        duration: e.target.value,
        description: this.state.info.description,
        achievement: this.state.info.achievement,
        lesson: this.state.info.lesson,
        id: this.state.info.id,
      }
    });
  };

  setNewDesc = (e) => {
    this.setState({
      info: {
        title: this.state.info.title,
        role: this.state.info.role,
        duration: this.state.info.duration,
        description: e.target.value,
        achievement: this.state.info.achievement,
        lesson: this.state.info.lesson,
        id: this.state.info.id,
      }
    });
  };

  setNewAchievement = (e) => {
    this.setState({
      info: {
        title: this.state.info.title,
        role: this.state.info.role,
        duration: this.state.info.duration,
        description: this.state.info.description,
        achievement: e.target.value,
        lesson: this.state.info.lesson,
        id: this.state.info.id,
      },
    });
  };

  setNewLesson = (e) => {
    this.setState({
      info: {
        title: this.state.info.title,
        role: this.state.info.role,
        duration: this.state.info.duration,
        description: this.state.info.description,
        achievement: this.state.info.achievement,
        lesson: e.target.value,
        id: this.state.info.id,
      }
    });
  };

  addInfo(e){
    e.preventDefault();
    this.setState({
      infos: this.state.infos.concat(this.state.info),
      info:{
        title: '',
        role: '',
        duration: '',
        description: '',
        achievement: '',
        lesson: '',
        id: uniqid(),
      },
    })
    console.log(this.state);
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
    });
  }

  form = () => {
    return <form id="add-info">
    <div id="title-wrapper">
      <label htmlFor="title">Title</label>
      <input id='title' type="text" value={this.state.info.title} onChange={this.setNewTitle} placeholder='e.g Company A'/>
    </div>

    <div id="info-detail-wrapper">
      <div>
        <label htmlFor="role">Role</label>
        <input id="role" type="text" onChange={this.setNewRole} value={this.state.info.role} placeholder='e.g Intern'/>
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input id="duration" type="text" onChange={this.setNewDuration} value={this.state.info.duration} placeholder='e.g May 2022 - July 2022'/>
      </div>
    </div>

    <label htmlFor="did">What did you do?</label>
    <input id='did' type="text" onChange={this.setNewDesc} value={this.state.info.description} placeholder='What you did'/>
    <label htmlFor="achievement">What did you achieve?</label>
    <input id="achieve" type="text" onChange={this.setNewAchievement} value={this.state.info.achievement} placeholder='Achievements'/>
    <label htmlFor="lesson">What did you learn?</label>
    <input id="lesson" type="text" onChange={this.setNewLesson} value={this.state.info.lesson} placeholder='Lessons learnt'/>
    
    <button type="submit" onClick={this.addInfo}>Add</button>
</form>
  }
    

  

  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <button onClick={this.toggleForm}>Toggle Form</button>
        </div>
        <Overview infos={this.state.infos}/>
        {this.state.form ? this.form() : null}
      </div>
    )
  }
}

export default AddInfo;