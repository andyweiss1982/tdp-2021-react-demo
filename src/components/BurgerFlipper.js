import { useState } from "react";

const BurgerFlipper = ({ magicAngle, prize }) => {
  const [angleOfRotation, setAngleOfRotation] = useState(0);

  return (
    <div>
      <h3>Flip the burger {magicAngle} degrees and win a prize</h3>
      <h1
        style={{
          transform: `rotate(${angleOfRotation}deg)`,
          display: "inline-block",
        }}
      >
        {angleOfRotation === magicAngle ? prize : "🍔"}
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
