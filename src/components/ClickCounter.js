import { useState, useEffect } from "react";

import { Button } from "@rbilabs/components-library"

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
      <Button onClick={handleClick}>Click Me</Button>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
      <h6>You clicked the button {clickCount} times</h6>
    </div>
  );
};

export default ClickCounter;
