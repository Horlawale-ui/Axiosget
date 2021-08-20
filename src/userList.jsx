import React, {useState, useEffect} from 'react'
import axios from 'axios'


/* To install axios you run npm install axios from the react file folder */
function UserList() {
    const [users, setUsers] = useState([])

    useEffect (() => {
        /* using axios to get data from the url inside useEffect */
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            /*using usestate to save data*/
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            <ul>
                {users.map(user => <li key={user.Id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList