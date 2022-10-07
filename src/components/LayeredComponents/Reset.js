import React, { Component } from 'react'

export default class Reset extends Component {
  constructor(props){
    super(props)
  }
handleClick = () => {
  this.props.reset();
}
  render() {
    return (
      <div>
        <button className='btn btn-info m-2 bg-secondary text-light' onClick={this.handleClick} > Reset</button>
       
      </div>
    )
  }
}
