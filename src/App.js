import "./App.css";
import React, { useState } from "react";

function App() {
  const [{ count, theme }, setState] = useState(() => ({
    count: 0,
    theme: "blue",
  })); //called Once pass function is good idea

  const addCount = () => {
    setState((prevState) => ({ theme, count: prevState.count + 1 })); // direct return in ()
  };

  return (
    <>
      <button
        onClick={() => {
          setState((prevState) => {
            return { theme, count: prevState.count - 1 };
          });
        }}
      >
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={addCount}>+</button>
    </>
  );
}

export default App;
