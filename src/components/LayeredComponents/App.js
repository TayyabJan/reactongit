import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import Reset from './Reset'
import "./App.css"
import Filter from './Filter'


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            list: JSON.parse(localStorage.getItem("Tasks")) === null ? [] : JSON.parse(localStorage.getItem("Tasks"))
        }

        this.state.bufferList = this.state.list
        //this.state.bufferList=JSON.parse(localStorage.getItem("Tasks"));


    }

    setItems = async (List) => {
        this.state.bufferList = List
        await localStorage.setItem("Tasks", JSON.stringify(this.state.bufferList))
        await this.setState({
            list: List

        })

    }
    searchItem = async (value) => {
        await this.setState({
            list: this.state.bufferList.filter(l => l.taskName.includes(value))
        })



    }

    resetList = async () => {
        await localStorage.removeItem("Tasks")
        await this.setState({
            list: [],
            bufferList:[]
        })
    }

    showAll = async () => {

        await this.setState({
            list: this.state.bufferList
        })

    }
    showIncomplete = async () => {
        //if(this.state.list.some(l => l.taskStatus==="InComplete")) {

        await this.setState({
            list: this.state.bufferList.filter(l => l.taskStatus === "InComplete")
        })
        //}
        // else { alert ("First Click on Show All")}
        console.log(this.state.list);
    }

    showCompleted = async () => {
        //if(this.state.list.some(l => l.taskStatus==="InComplete") && (this.state.list.some(l => l.taskStatus==="Completed"))) {
        await this.setState({
            list: this.state.bufferList.filter(l => (l.taskStatus === "Completed"))
        })
        //}
        // else {
        //     alert("First Click on Show All")
        // }
        console.log(this.state.list);
    }
    render() {
        return (
            <div className='main'>
                <div className='App'>
                    <h1 className='text'>To Do List</h1>
                    
                    <Add list={this.state.list}
                        changeList={this.setItems}
                        search={this.searchItem}
                        All={this.showAll}
                    />
                     

                    <div className='status'>

                        <button className='btn btn-info m-2 text-bold'
                            onClick={this.showAll}
                        >Total Tasks : {this.state.bufferList.length}

                        </button>

                        <button className='btn btn-info m-2 bg-primary'
                            onClick={this.showCompleted}
                        >Completed : {this.state.bufferList.filter(l => l.taskStatus === "Completed").length}
                        </button>
                        <button className='btn btn-info m-2 bg-warning'
                            onClick={this.showIncomplete}
                        >Incomplete
                            : {this.state.bufferList.filter(l => l.taskStatus === "InComplete").length}
                        </button>
                        <button className='btn btn-info m-2 bg-secondary text-light'
                         onClick={this.resetList} > Reset</button>

                    </div>
                    {(this.state.list.length === 0)
                        ?
                        <h1 className='text text-danger'>List is Empty</h1>
                        :

                        <div>


                            <List list={this.state.list} changeList={this.setItems} />


                        </div>
                    }
                    {/* <Filter All={this.showAll} completed={this.showCompleted}
                    incomplete={this.showIncomplete}

                /> */}




                </div>
            </div>
        )
    }
}
