import React, { Component } from 'react'

export default class
  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listValue: "",
      list: this.props.list

    }
  }
  handleClick = async (e) => {
    e.preventDefault();

    if (this.state.listValue === "") {
      alert(" Empty Item Not Allowed")
    }
    else if (this.state.list.some(l => l.taskName === this.state.listValue)) {
      alert(" This Item Already Exists")
    }
    else {


      let NewItem = {
        "taskName": this.state.listValue,
        "taskStatus": "InComplete"
      }
      this.state.list.push(NewItem)

      await this.setState({
        list: this.state.list,
        listValue: ""
      })
      this.props.changeList(this.state.list)

    }

  }
  change = async (e) => {
    await this.setState({
      listValue: e.target.value
    })
    console.log(e.target.value)
    // console.log(this.state.list.indexOf(this.state.listValue) + " of " + this.state.listValue)
    if (this.state.list.some(l => l.taskName.includes(this.state.listValue + ""))) {
     await this.props.search(this.state.listValue)
    }

    else {
      this.props.All()

    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="text"
            id="taskvalue"
            value={this.state.listValue}
            onChange={this.change}
            onFocus={this.focusHandler}
          >

          </input>
          <button className='btn btn-success m-2' onClick={this.handleClick}>Save</button>
         
        </form>
      </div>
    )
  }
}
