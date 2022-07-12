import React, { Component } from "react";

import uniqid from "uniqid";


class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      infos: [],
      info: {
        title: '',
        role: '',
        duration: '',
        description: '',
        achievement: '',
        lesson: '',
        pos: 0,
        id: uniqid(),
      },
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
        pos: this.state.info.pos,
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
        pos: this.state.info.pos,
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
        pos: this.state.info.pos,
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
        pos: this.state.info.pos,
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
        pos: this.state.info.pos,
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
        pos: this.state.info.pos,
      }
    });
  };

  addInfo(e){
    e.preventDefault();
    if(this.state.infos.length < 3) {
      console.log(this.state);
      this.setState({
        infos: this.state.infos.concat(this.state.info),
        info:{
          title: '',
          role: '',
          duration: '',
          description: '',
          achievement: '',
          lesson: '',
          pos: this.state.info.pos + 1,
          id: uniqid(),
        },
      })
    } else {
      alert(`Maximum of (3)!`)
    }
    
  }

  deleteInfo = (e) => {
    const targetID = e.target.value;
    let infosCopy = [...this.state.infos];
    for (let index = 0; index < infosCopy.length; index++) {
      const info = infosCopy[index];
      if(Object.values(info).includes(targetID)) {
        infosCopy.splice(index,1);
        break;
      }
    }
    this.setState({
      infos: infosCopy,
      info: this.state.info,
    })

  }

  Overview = () => {
    return (
      <div>
        {this.state.infos.map((info) => {
          return (
            <div id="info">
              <div id="info-header">
                <h3>{info.title}</h3>
                <button onClick={this.deleteInfo} value={info.id}>Delete</button>
              </div>
              
              <div>
                <h4>{info.role}</h4>
                <h4>{info.duration}</h4>
              </div>
              
                <li key={info.id+'1'}>{info.description}</li>
                <li key={info.id+'2'}>{info.achievement}</li>
                <li key={info.id+'3'}>{info.lesson}</li>
            
            </div>
          );
        })}
      </div>
    );
  };

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
    });
  }

  form = () => {
    return <div id="add-info-form">
      <form id="add-info">
        <div id="title-wrapper">
          <label htmlFor="title">Title</label>
          <input id='title' type="text" name="title" value={this.state.info.title} onChange={this.setNewTitle} placeholder='e.g Company A' required='true'/>
        </div>
        <div id="info-detail-wrapper">
          <div>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" onChange={this.setNewRole} value={this.state.info.role} placeholder='e.g Intern' required/>
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input id="duration" type="text" onChange={this.setNewDuration} value={this.state.info.duration} placeholder='e.g May 2022 - July 2022' required/>
          </div>
        </div>
        <label htmlFor="did">What did you do?</label>
        <input id='did' type="text" onChange={this.setNewDesc} value={this.state.info.description} placeholder='What you did' required/>
        <label htmlFor="achievement">What did you achieve?</label>
        <input id="achieve" type="text" onChange={this.setNewAchievement} value={this.state.info.achievement} placeholder='Achievements' required/>
        <label htmlFor="lesson">What did you learn?</label>
        <input id="lesson" type="text" onChange={this.setNewLesson} value={this.state.info.lesson} placeholder='Lessons learnt' required/>
        
        <button type="submit" onClick={this.addInfo}>Add</button>
      </form>
    </div>
  }
    

  

  render() {
    return (
      <div>
        <div>
          <h2 contentEditable='true'>{this.props.title}</h2>
          <button id="toggle" onClick={this.toggleForm}>Toggle Form</button>
        </div>
        <div id="infos-add-info">
         {this.Overview()}
        </div>
        
        {this.state.form ? this.form() : null}
      </div>
    )
  }
}

export default AddInfo;