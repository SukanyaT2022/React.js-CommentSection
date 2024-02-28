import React, { useState } from 'react'

const App2 = () => {

    const [singleCom, setSingleCom] = useState('')
    const [allCom, setAllCom] = useState('')

    const inputFunc=(e)=>{
        setSingleCom(e.target.value)
        console.log(singleCom)
    }
    const submitFunc =()=>{
        setAllCom((preCom)=>[...preCom,singleCom])
    }
  return (
    <div>
<input type='text' value={singleCom} onChange={inputFunc}/>
<button onClick={submitFunc}>Submit</button>
<div>
    {
        allCom && allCom.map((val)=>(
         <p>{val}</p>   
        ))
    }
</div>

    </div>
  )
}

export default App2