import { Alert, Box, Button } from "@mui/material";
import { randomHexGenerator } from "../utils/randomHexGenerator";
import { useState } from "react";

function generateColorOptions() {
  const randomIndex = Math.floor(Math.random() * 3);
  const options = Array.from({ length: 3 }).map((_, index) => {
    return {
      isCorrect: index === randomIndex ? true : false,
      hexColor: randomHexGenerator(),
    };
  });
  return options;
}

function ColorBox() {
  const [colors, setColors] = useState(() => generateColorOptions());
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const correctColorArray = colors.filter((colorObj) => colorObj.isCorrect);
  const correctColor = correctColorArray[0].hexColor;

  function handleClick(clickedColor) {
    console.log(clickedColor);
    if (clickedColor === correctColor) {
      setIsCorrectAnswer(true);
      setColors(generateColorOptions);
      console.log("correct answer");
    } else {
      setIsCorrectAnswer(false);
      console.log("wrong answer");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Box
          maxWidth="sm"
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: `${correctColor}`,
          }}
        />

        <div style={{ margin: "3rem 0" }}>
          {colors.map((color) => {
            return (
              <Button
                variant="text"
                onClick={(event) => {
                  handleClick(event.target.innerText);
                }}
                key={color.hexColor}
              >
                {color.hexColor}
              </Button>
            );
          })}
          {isCorrectAnswer !== null ? (
            isCorrectAnswer ? (
              <Alert severity="success">The answer is correct!</Alert>
            ) : (
              <Alert severity="error">Wrong answer, try Again!</Alert>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ColorBox;
