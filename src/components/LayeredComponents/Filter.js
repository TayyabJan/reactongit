import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props){
        super(props)

    }

    showAll = () => {
        this.props.All();
      }
      showCompleted = () => {
        this.props.completed();
        
      }
      showIncomplete = () => {
        this.props.incomplete();
      }
  render() {
    return (
      <div>
     
      <button className='btn btn-info m-2' onClick={this.showAll}>All</button>
      <button className='btn btn-info m-2 bg-primary' onClick={this.showCompleted}>Completed</button>
      <button className='btn btn-info m-2 bg-warning' onClick={this.showIncomplete}>Incomplete</button>
      </div>
    )
  }
}
