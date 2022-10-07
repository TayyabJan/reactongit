import React, { Component } from 'react'
import Item from './Item';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:this.props.list
    }
  }
  setItem = async (item,status) => {
  
    let updatedList = this.props.list 
    updatedList = await updatedList.map(listItem => {
      if(listItem.taskName===item)
      {
        (listItem.taskStatus = (status) ?  "Completed"  : "InComplete" )
      }
      return listItem
  
    } )
    
    this.setState ({
      list:updatedList
    })
     
      this.props.changeList(updatedList)
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(l => {
              return <Item 
              text={l.taskName} 
              status={ (l.taskStatus=== "Completed") ? true : false}
              changeItem = {this.setItem}
               /> 

            })

           

          }

        </ul>
      </div>
    )
  }
}
