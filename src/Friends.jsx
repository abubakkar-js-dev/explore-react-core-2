import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend";

const Friends = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data => setUsers(data));

       async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        }
        fetchData()
    },[])
  return (
    <div className="box">
        <h3>Friends: {users.length}</h3>
        {
            users.map(user => <Friend key={user.id} friend={user} />)
        }
    </div>
  )
}

export default Friends