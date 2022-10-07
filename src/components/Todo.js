import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            listValue: "",
            searchList: [],
            bufferList: [],
            list: []
        }
    }
    async handleClick(e) {

        if (this.state.listValue === "") {
            alert(" Empty Item Not Allowed")
        }
        else if (this.state.list.indexOf(this.state.listValue) >= 0) {
            alert(" This Item Already Exists")
        }
        else {
            this.state.list.push(this.state.listValue)

           await this.setState({
                list: this.state.list
            })

        }
        this.setState(
            {
                listValue: ""
            }
        )

    }
    change(e) {
        this.setState({
            listValue: e.target.value
        })



        console.log(this.state.list.indexOf(this.state.listValue) + " of " + this.state.listValue)


    }
    render() {
        return (
            <div>
                <input type="text"
                    id="taskvalue"
                    value={this.state.listValue}
                    onChange={this.change}
                >

                </input>
                <button onClick={this.handleClick}>Save</button>
                <ul>
                    {
                         (this.state.listValue==="") &&
                        this.state.list.map((l, k) => {

                            return <li key={k}>{l}</li>
                        }
                        )
                    }
                    {

                    (this.state.listValue !="") &&
                        this.state.list
                     
                    .filter(l => l===this.state.listValue)
                    .map((l, k) => {

                        return <li key={k}>{l}</li>
                    }
                    )
                            

                    }
                </ul>

            </div>
        )
    }
}
