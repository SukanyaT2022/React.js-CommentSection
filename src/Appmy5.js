import React, { useState } from 'react'

const Appmy5 = () => {
    const [singleItem, setSingleItem] = useState('')
    const [allItem, setAllItem] = useState([])

 const inputFunc =(e)=>{
setSingleItem(e.target.value)
    }
const submitFunc =()=>{
    setAllItem((preCom)=>[...preCom,singleItem])
    setSingleItem('')
}
const deleteFunc =(key1)=>{
const storeFilter = allItem.filter((item, key2)=>key1!==key2)
setAllItem(storeFilter)
}

  return (
    <div>
<input type='text' value={singleItem} onChange={inputFunc}/>
<button onClick={submitFunc}>submitInput</button>

<div>
{
allItem.map((val,key1)=>(
    <div>
<p>{val}</p>
<button onClick={()=>deleteFunc(key1)}>Delete</button>
</div>
))
}

</div>


</div>
  )
}
export default Appmy5