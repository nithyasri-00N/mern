import React from 'react'

const Usestate = () => {
    const[count,setCount]=React.useState(0)
    const handleIncrement=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Increment</button>*/}
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Usestate