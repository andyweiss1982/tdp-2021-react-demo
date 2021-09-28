import { useState } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

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
