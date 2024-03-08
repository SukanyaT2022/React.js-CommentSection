import './App.css';
import { useState } from 'react';

function App() {
let temp_date = new Date();// time
const [singleCom, setSingleCom] = useState('')
const [storeAllcom, setStoreAllCom] = useState([])
const [myDate,setMyDate] = useState(`${temp_date.getHours()}:${temp_date.getMinutes()}:${temp_date.getSeconds()}`);//time

const inputFunc =(e)=>{
setSingleCom(e.target.value)
}
 const submitFunc =(e)=>{
  console.log(myDate)

    e.preventDefault();
    setSingleCom("")
    setStoreAllCom((prevComment)=>[...prevComment,{comment:singleCom,myDate:myDate}]);//time
    console.log(storeAllcom)
 }

const deleteHandler = (id)=>{
  const filter = storeAllcom.filter((val,key)=> key != id);
  setStoreAllCom(filter)
} 

const sortHandler = ()=>{
  const sort = [...storeAllcom].sort((a, b) => {
    return new Date(a.myDate) - new Date(b.myDate);
  });
  setStoreAllCom(sort)
}

/// we ned to make clear input box after submit
  return (
    <div className="App">
     <h2>Comment</h2>
     <p>Why1?</p>
     {/* <div>Time: {`${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}}`}</div> */}
      <input type='text' value={singleCom} onChange={inputFunc}/>
      <button onClick={submitFunc}>Submit</button>
      <button onClick={sortHandler}>Sort</button>
      <div className='WrapCommentBox'>
      {
        storeAllcom && storeAllcom.map((val,key)=>(
          <div className='comment_box' key={key}>
              <p>{val.comment}</p>
              <p>{val.myDate}</p>
              <button className='delete-button' onClick={()=>deleteHandler(key)}>X</button>
          </div>
          ))
      }
      </div>
    </div>
  );
}

export default App;
