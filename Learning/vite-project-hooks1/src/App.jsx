import { useState } from 'react'
import './App.css'
import { preconnect } from 'react-dom';

function App() {
  let [counter,setCounter] = useState(15);
  const incCounter = ()=>{
    if(counter+1<=20) setCounter(counter+1);
    else setCounter(counter);
  }
  const decCounter=()=>{
    if(counter-2>=0){
      setCounter(counter-2);
      // setCounter(prevcounter =>prevcounter - 1);
    }
    else setCounter(precounter => precounter=0);
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


// import {useState} from 'react'
// import './App.css'
// import Card from './components/Card'

// function App(){
//   let myObj={
//     username:"hitesh",
//     age:21
//   }
//   let newarr=[1,2,3,4]
//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
//       <Card channel="hello" btnText="click me" />
//       <Card channel="hitesh" btnText="Visit me" />
//     </>
//   )
// }

// export default App