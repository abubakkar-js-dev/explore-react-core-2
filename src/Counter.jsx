import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAddBtn =() => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{marginBottom: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAddBtn} style={{border: '2px solid purple', marginBottom: '10px'}}>Add</button>
            <button onClick={handleReduce} style={{border: '2px solid purple', marginBottom: '10px', marginLeft: '12px'}}>Decrease</button>
        </div>
    )
}