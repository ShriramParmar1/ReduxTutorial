import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InNum, DeNum } from "./actions";

function App() {
  const mystate = useSelector((state) => state.changTheNum);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(InNum(50));
  };
  const handleDecrement = () => {
    dispatch(DeNum(5));
  };
  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <div className="counter">
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>

        <span className="count">{mystate}</span>
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
