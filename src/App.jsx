
import { useState } from 'react'
import './App.css'
import { Bottles } from './Components/Bottles/bottles'
import { useEffect } from 'react'

function App() {
  const [bottles,setBottles] = useState([])
  useEffect(() => {
          fetch('bottle.json')
          .then(res => res.json())
          .then(data => setBottles(data))
  },[])
  // console.log(bottles);
  const handleClick = bottle => {
console.log("mia");
  }


  return (
    <>
    <h1>Bottle Collection</h1>
     <h4>Bottles length : {bottles.length}</h4>
     <h2>Select bottles : </h2>
     <div className='appsdesign'>
     {
      bottles.map(bottle => <Bottles bottle={bottle} handleClick={handleClick}></Bottles>  )
     }
     </div>
      
      
    </>
  )
}

export default App
