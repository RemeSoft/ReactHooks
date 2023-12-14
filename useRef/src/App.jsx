import { useEffect, useRef } from "react";

function App(){
  const inputRef = useRef();
  const displayRef = useRef();
  const submitRef = useRef();

  function handelSubmit(event){
    event.preventDefault();
    const value = inputRef.current.value;
    displayRef.current.innerText = value;
    inputRef.current.value="";
  }

  return (
    <form onSubmit={handelSubmit}>
      <input ref={inputRef} type="text" />
      <button ref={submitRef}>Submit</button>
      <p ref={displayRef}>sd</p>
    </form>
  )
}

export default App
