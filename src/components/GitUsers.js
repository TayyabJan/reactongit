import React, { Component } from 'react'
import axios from 'axios'


export default class GitUsers extends Component {
    constructor() {
        super()
        this.state = {
            table: []
        }
    }
    render() {
        const getdata = async () => {
            const { data } = await axios.get("https://api.github.com/users")
            const tasksTable = document.createElement("table");
            tasksTable.id = "tasksTable";
            tasksTable.border = "1";
            tasksTable.className = "table table-striped"

            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");
            const tr = document.createElement("tr");
            for (let i in data[0]) {
                const th_Task = document.createElement("th");
                th_Task.scope = "col";
                th_Task.innerHTML = i;
                tr.appendChild(th_Task);
            }

            thead.appendChild(tr);
            tasksTable.appendChild(thead);


            for (let i = 0; i <= data.length; i++) {
                const trbody = document.createElement("tr");
                for (let x in data[i]) {
                    const td = document.createElement("td");
                    const img = document.createElement("img");
                    if (x == "avatar_url") {
                        img.src = data[i][x];
                        img.alt = data[i][0]
                        img.width = 30;
                        img.height = 30;
                        td.appendChild(img);
                    }
                    else {
                        td.innerHTML = data[i][x];
                    }
                    trbody.appendChild(td);
                }
                tbody.appendChild(trbody);
            }
            tasksTable.appendChild(tbody);
            document.body.appendChild(tasksTable);
        }
        return (
            <div>
                <h1>GitUsers</h1>
                <button on onClick={getdata}>Fetch Data</button>
            </div>
        )
    }
}
