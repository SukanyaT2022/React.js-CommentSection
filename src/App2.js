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

    const deleteFunc =(key1)=>{
const filter = allCom.filter((item, key2)=>key1!== key2)
setAllCom(filter)
    }
  return (
    <div>
<input type='text' value={singleCom} onChange={inputFunc}/>
<button onClick={submitFunc}>Submit</button>
<div>
    {
      
        allCom && allCom.map((val,key1)=>(
            <div className=''>
         <p>{val}</p>   
         <button onClick={()=>deleteFunc(key1)}>X</button>
         </div>
        ))
    }
</div>

    </div>
  )
}

export default App2