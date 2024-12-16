import React, { useState, useRef } from "react";
import "./App.css"; // Assuming you have your CSS in App.css

const Counter = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null); // Use useRef to create a reference for the input

  const handleIncrement = () => {
    const incrementValue = inputRef.current.value
      ? Number(inputRef.current.value)
      : 1;
    setCount(count + incrementValue);
  };

  const handleDecrement = () => {
    const decrementValue = inputRef.current.value
      ? Number(inputRef.current.value)
      : 1;
    setCount(count - decrementValue);
  };

  return (
    <div className="counter">
      <div className="led"></div>
      <div className="number-display">{String(count).padStart(4, "0")}</div>
      <div className="buttons">
        <button className="button plus" onClick={handleIncrement}>
          +
        </button>
        <button className="button minus" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div className="input-box">
        <input type="number" ref={inputRef} placeholder="Enter value" />
      </div>
    </div>
  );
};

export default Counter;
