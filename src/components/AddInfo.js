import React, { Component } from "react";

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {text: ''},
      infos: [],
    }

    this.addInfo = this.addInfo.bind(this);
  }

  setNewInfo = (e) => {
    this.setState({
      info: {
        text: e.target.value,
      }
    })
  }

  addInfo(){
    this.setState({
      infos: this.state.infos.concat(this.state.info.text),
      info:{
        text: '',
      },
    })
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <div>Add Info</div>
        <input type="text" onChange={this.setNewInfo}/>
        <button onClick={this.addInfo}>Add</button>
      </div>
    )
  }
}

export default AddInfo;