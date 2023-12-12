import { useState } from "react"

function App(){
  const [value, setValue] = useState();

  function changeListiner(event){
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={changeListiner}/>
      <p>{value}</p>
    </div>
  )
}

export default App
