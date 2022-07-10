import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {text: '', id: uniqid()},
      infos: [],
    }

    this.addInfo = this.addInfo.bind(this);
  }

  setNewInfo = (e) => {
    this.setState({
      info: {
        text: e.target.value,
        id: this.state.info.id,
      }
    })
  }

  addInfo(){
    this.setState({
      infos: this.state.infos.concat(this.state.info),
      info:{
        text: '',
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
        <input type="text" onChange={this.setNewInfo} value={this.state.info.text}/>
        <button onClick={this.addInfo}>Add</button>
        
      </div>
    )
  }
}

export default AddInfo;