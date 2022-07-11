import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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


  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <Overview infos={this.state.infos}/>
        <form id="add-info">
          <div>
            <label htmlFor="title">Title</label>
            <input id='title' type="text" value={this.state.info.title} onChange={this.setNewTitle} placeholder='e.g Company A'/>
          </div>

          <div>
            <div>
              <label htmlFor="role">Role</label>
              <input id="role" type="text" onChange={this.setNewRole} value={this.state.info.role} placeholder='e.g Intern'/>
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <input id="duration" type="text" onChange={this.setNewDuration} value={this.state.info.duration} placeholder='e.g May 2022 - July 2022'/>
            </div>
          </div>

          <div>
            <input type="text" onChange={this.setNewDesc} value={this.state.info.description} placeholder='What you did'/>
            <input type="text" onChange={this.setNewAchievement} value={this.state.info.achievement} placeholder='Achievements'/>
            <input type="text" onChange={this.setNewLesson} value={this.state.info.lesson} placeholder='Lessons learnt'/>
          </div>
          <button type="submit" onClick={this.addInfo}>Add</button>
        </form>
        
        
        
      </div>
    )
  }
}

export default AddInfo;