import React, { useState } from 'react'

const App4 = () => {
    const [singleItem, setSingleItem] = useState('')
    const [allItem, setAllItem] = useState('')
const inputFunc =(e)=>{
setSingleItem(e.target.value)
}

  return (
    <div>
<input type='text' value={singleItem}  onChange={inputFunc}/>



    </div>
  )
}

export default App4