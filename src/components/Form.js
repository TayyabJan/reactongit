
import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      keyword: "",
      results: []
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    const apikey = "JT_gB86sBFa0eVlRkUJE34XGA46tWiqA3t8PhanU7-s"
    const searckey = this.state.keyword
    
    const { data } = await axios.get(`https://api.unsplash.com/photos/?client_id=${apikey}&query=${searckey}`)
    console.log(data);

    this.setState({
      results : data
    })


  }
  handleChange(e) {
    this.setState({
      keyword : e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.keyword}
            onChange={this.handleChange}
            


          />
          <button type='submit' id='buttonsearch'>Search</button>
        </form>

       {
         this.data.map(d => {
           return <img src= {d.url.small} ></img>
         })
       }
        

        
      </div>
    )
  }
}
