import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked.')
  }
  const handleClick2 = ()=>{
    alert('button two is clicked.');
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>Here is React Core Concept Two.</h3>
      <Friends></Friends>
      <Users />
      <Team />
      <Counter />
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click again</button>
      <button onClick={()=> { alert('Clicked Third.')}}>Click third</button>
      <button onClick={() => {addToFive(3)}}>Frour</button>
    </>
  )
}

export default App
