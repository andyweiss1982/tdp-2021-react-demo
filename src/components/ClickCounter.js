import { useState, useEffect } from "react";

const loadClickCountFromLocalStorage = () =>
  Number(localStorage.getItem("clickCount") || 0);

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(loadClickCountFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("clickCount", clickCount);
  }, [clickCount]);

  const handleClick = () => setClickCount(clickCount + 1);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
    </div>
  );
};

export default ClickCounter;
