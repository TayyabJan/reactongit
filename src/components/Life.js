import React from 'react'
import axios from 'axios';

export default class Life extends React.Component {
    constructor(props){
        super();
        this.change= this.change.bind(this);
        this.state = {
            num:0,
            results:[]
        }
    }
   async componentDidMount(){
        console.log('I am component Did Mount Method');
        const {data} = await axios.get("https://api.github.com/users");
      
       this.setState=({
           results:data
       }) 

    }
    componentDidUpdate(){
        console.log('I am component Update Method');
    } 
    change(){
       this.setState({
           num:Math.floor(Math.random()*100)
       }
       )
    }
    

  render() {
    return (
      <div>
          {/* <h1>{this.state.num}</h1>
          <button onClick={this.change}>Click</button> */}
          </div>
    )
  }
}
