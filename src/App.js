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
    setStoreAllCom((prevComment)=>[...prevComment,singleCom]);
    console.log(storeAllcom)
 }
/// we ned to make clear input box after submit
  return (
    <div className="App">
     <h2>Comment</h2>
     <p>Why1?</p>
      <input type='text' value={singleCom} onChange={inputFunc}/>
      <button onClick={submitFunc}>Submit</button>
      <div className='WrapCommentBox'>
      {
        storeAllcom && storeAllcom.map((comment)=>(
              <p>{comment}</p>
          ))
      }
      </div>
    </div>
  );
}

export default App;
