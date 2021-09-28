import { useState } from "react";

const BurgerFlipper = () => {
  const [angleOfRotation, setAngleOfRotation] = useState(0);

  return (
    <div>
      <h1
        style={{
          transform: `rotate(${angleOfRotation}deg)`,
          display: "inline-block",
        }}
      >
        🍔
      </h1>
      <input
        type="range"
        min="0"
        max="360"
        value={angleOfRotation}
        onChange={(event) => {
          setAngleOfRotation(Number(event.target.value));
        }}
      />
      <h6>You are rotating the burger {angleOfRotation} degrees</h6>
    </div>
  );
};

export default BurgerFlipper;
