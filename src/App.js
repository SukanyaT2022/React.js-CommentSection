import './App.css';
import { useState } from 'react';

function App() {
const [singleCom, setSingleCom] = useState('')
const [storeAllcom, setStoreAllCom] = useState([])

const inputFunc =(e)=>{
setSingleCom(e.target.value)
}
 const submitFunc =(e)=>{
    e.preventDefault();
    setSingleCom("")
    setStoreAllCom((prevComment)=>[...prevComment,singleCom]);
    console.log(storeAllcom)
 }

const deleteHandler = (id)=>{
  const filter = storeAllcom.filter((val,key)=> key != id);
  setStoreAllCom(filter)
} 

const sortHandler = ()=>{
  const sort = [...storeAllcom].sort();
  setStoreAllCom(sort)
}

/// we ned to make clear input box after submit
  return (
    <div className="App">
     <h2>Comment</h2>
     <p>Why1?</p>
      <input type='text' value={singleCom} onChange={inputFunc}/>
      <button onClick={submitFunc}>Submit</button>
      <button onClick={sortHandler}>Sort</button>
      <div className='WrapCommentBox'>
      {
        storeAllcom && storeAllcom.map((comment,key)=>(
          <div className='comment_box' key={key}>
              <p>{comment}</p>
              <button className='delete-button' onClick={()=>deleteHandler(key)}>X</button>
          </div>
          ))
      }
      </div>
    </div>
  );
}

export default App;
