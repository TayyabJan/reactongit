import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
 

export default class Item extends Component {
  constructor(props) {
    super(props)
  }
  changeStatus = async (e) => {
  
    await  this.props.changeItem(e.target.id,e.target.checked)
   

  }
  deleteTask = (e) => {
    alert("You want to delete "  + e.target.id)
  }
  render() {
  
    
    
    return (
      <div>
        
      <li  key={this.props.text} className='li' >
       
        {(this.props.status==true)
        ?  
        <div>
           <input type="checkbox" id={this.props.text}
          className="checkbox"
          name={this.props.text}
          defaultChecked={this.props.status}
          onChange={this.changeStatus}
          >
          
        </input>
          <label className='completed-li bg-primary' htmlFor={this.props.text}>
          {this.props.text}
          </label><button className='btn btn-danger me-20'
          id={this.props.text}
          onClick={this.deleteTask}
          >Delete</button>
          <hr className='hr'></hr>
          </div>
        : 
        <div>
           <input type="checkbox" id={this.props.text}
          className="checkbox"
          name={this.props.text}
          defaultChecked={this.props.status}
          onChange={this.changeStatus}

          >
          
        </input>
        <label htmlFor={this.props.text} className='text bg-warning'>
          {this.props.text}</label>
          <button className='btn btn-danger me-20'
          id={this.props.text}
          onClick={this.deleteTask}>
            Delete</button>
            <hr className='hr'></hr>
            </div>
            
        }
        
      </li>
      
      </div>
      

    )


  }
}
