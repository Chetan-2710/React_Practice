import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  let [counter,setCounter] = useState(15);
  const incCounter = ()=>{
    if(counter+1<=20) setCounter(counter+1);
    else setCounter(counter);
  }
  const decCounter=()=>{
    if(counter-1>=0) setCounter(counter-1);
    else setCounter(counter);
  }
  return (
    <>
      <h1>Chair aur react</h1>
      <h1>counter value: {counter}</h1>
      <button
      onClick={incCounter}>
        Add value {counter}
      </button>
      <br /><br />
      <button
      onClick={decCounter}>Remove value {counter}</button>
    </>
  )
}

export default App
