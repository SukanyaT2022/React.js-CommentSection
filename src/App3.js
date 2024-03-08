import React, { useState,useEffect } from 'react'
import './App.css';


const App3 = () => {
const [flag,setFlag] = useState(false)
const [singleItem, setSingleItem] = useState('')
const [allItem, setAllItem] = useState('')
// const [myDate, setMyDate] = useState(date.toTimeString().split(' ')[0])
const [myDate,setMyDate] = useState("");//time
// let arr = [
  //   0 : 11:30:10,
  //   1: GMT,
  //   2: Pakistan
  // ]
  //string manupulation javascript remind ana to send
  
useEffect(()=>{
  let temp_date = new Date();
  setMyDate(`${temp_date.getHours()}:${temp_date.getMinutes()}:${temp_date.getSeconds()}`)
},[allItem])

const inputFunc =(e)=>{
setSingleItem(e.target.value)
}
const submitFunc =()=>{
  setAllItem((preComment)=>[...preComment,{oneComment:singleItem, myDate:myDate}])
  setSingleItem("")
}
const deleteFunc =(key1)=>{
 const filter = allItem.filter((item,key2)=>key1 !== key2)
 setAllItem(filter)
}

const sortFunc =()=>{
  let myDates = allItem.map(item => item.myDate);
  let result = myDates.sort().reverse();
  // let sortedData = [myDate].sort((a, b) => {
  //   // Convert strings to Date objects for proper comparison
  //   const dateA = new Date(a.myDate).getTime();
  //   const dateB = new Date(b.myDate).getTime();
    
  //   return dateB - dateA; // Compare dates
  // });

  console.log(result)
  setFlag(true)
  setAllItem(result);
}
  return (
    <div>
<input type='text'  value={singleItem} onChange={inputFunc}/>
<button onClick={submitFunc}>Submit</button>
<button onClick={sortFunc}>Sort</button>
<div>
{
    allItem && allItem.map((val,key1)=>(
    <div className='comment_box' key={key1}>
     {!flag &&
     <>
        <p>{val.oneComment}</p>
        <p>{val.myDate}</p>
      </>}
      {flag && <p>{val}</p>}
      <button onClick={()=>deleteFunc(key1)}>X</button>
    </div>
    ))
}

</div>
    </div>
  )
}

export default App3