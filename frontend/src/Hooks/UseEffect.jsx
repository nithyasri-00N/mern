import React,{ Usestate } from 'react'
import Usestate from './Usestate'

const Useeffect = () => {
    const [count,setCount]=Usestate(0);
    Useeffect(()=> {
        console.log("use effect Mounted")
      },[])

  return (
    <>
    <div>Useeffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default Useeffect