import { useState, useEffect } from "react";
import axios from 'axios'


const Users = () => {

    const [list, setlist] = useState([])
    const getUsers = async () => {

        const { data } = await axios.get("https://api.github.com/users")
        setlist(data)


    }
    useEffect(() => {

    getUsers();


    }, [list])




    return (
        <div>
            <h1>Users</h1><button onClick={getUsers}>GetUsers</button>
            <ul>
                {list.map(u => {
                    return <li key={u.id}>{u.login}
                    </li>
                }
                )}
            </ul>
        </div>
    )
}
export default Users