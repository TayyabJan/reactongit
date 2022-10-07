import React from "react";
import axios from "axios";
export default class LifeCycles extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num:0,
            users:[]
        }
    }
  async  componentDidMount(){
        console.log('Mount Method');
        const {data} = await axios.get("https://api.github.com/users")
        this.setState({
            users:data
        })

    }
   componentDidUpdate(){
       console.log('Did Update');
   }
    render(){
        return(
            <div>
                <ul>
                    { 
                        this.state.users.map(u =>{

                            return <li key={u.id}>{u.login}</li>
                        }
                            )
                    }
                </ul>
            </div>
            )
        }
    }