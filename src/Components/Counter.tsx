import { useState } from "react";

const Counter = () => {
  // getting the value of the state
  // setting the value of the state
  // Default value for the state(Starting value)
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decCount}>Increment</button>
    </div>
  );
};

export default Counter;