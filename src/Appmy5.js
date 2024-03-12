import React, { useState } from 'react'

const Appmy5 = () => {
    const [singleItem, setSingleItem] = useState('')
    const [allItem, setAllItem] = useState([])
    const showDate = new Date()
    const [myDate, setMyDate]= useState(`${showDate.getHours()}:${showDate.getMinutes()}: ${showDate.getSeconds()}`)

 const inputFunc =(e)=>{
setSingleItem(e.target.value)
    }
const submitFunc =(e)=>{
  e.preventDefault();
    setAllItem((preCom)=>[...preCom,{comment:singleItem, clock:myDate}])
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
  <div className='mainBox' key1={key1}>
<p>{val.comment}</p>
<p>{val.clock}</p>
<button onClick={()=>deleteFunc(key1)}>Delete</button>
</div>
))
}

</div>


</div>
  )
}
export default Appmy5