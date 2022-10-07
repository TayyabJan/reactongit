import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:0
        }
    }

    handleClick(e){
        if(e.target.name==='btn1')
        console.log('Button 1 Pressed')
        else if(e.target.name==='btn2')
        console.log('Button 2 Pressed')
    }
  render() {
    return (
      <div>
          <button
            id='1'
            name='btn1'
            onClick={(e)=>this.handleClick(e)}
            >Button 1
          </button>
          <button
          id='2'
          name='btn2'
          onClick={(e)=>this.handleClick(e)}
          >Button 2
          </button>
      </div>
    )
  }
}
