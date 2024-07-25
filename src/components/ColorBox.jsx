import { randomHexGenerator } from "../utils/randomHexGenerator";

function ColorBox() {
  const color = randomHexGenerator();

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: `${color}`,
        }}
      ></div>
      <div>
        <p>{color}</p>
        <p>option 2</p>
        <p>option 3</p>
      </div>
    </div>
  );
}

export default ColorBox;
