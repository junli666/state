import "./App.css";
import React, { useState } from "react";

function return4() {
  console.log("called");
  return 4;
}
function App() {
  const [count, setCount] = useState(return4); //called Once pass function is good idea
  //const [count, setCount] = useState(return4()); //called each time
  const addCount = () => {
    setCount(count + 1);
  };
  const addCount2WrongWay = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  const addCount2RightWay = () => {
    setCount((PrevCount) => PrevCount + 1);
    setCount((PrevCount) => PrevCount + 1);
  };
  return (
    <>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={addCount}>+</button>
      <button onClick={addCount2WrongWay}>++wrong</button>
      <button onClick={addCount2RightWay}>++right</button>
    </>
  );
}

export default App;
