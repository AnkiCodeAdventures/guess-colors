import { Alert, Box, Button, Typography } from "@mui/material";
import { randomHexGenerator } from "../utils/randomHexGenerator";
import CheckIcon from "@mui/icons-material/Check";
import FmdBadIcon from "@mui/icons-material/FmdBad";

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
    if (clickedColor === correctColor) {
      setIsCorrectAnswer(true);
      setColors(generateColorOptions);
    } else {
      setIsCorrectAnswer(false);
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
      <Typography variant="h1" color="white">
        Guess The Color !
      </Typography>
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
                <Typography variant="h5" color="white" gutterBottom>
                  {color.hexColor}
                </Typography>
              </Button>
            );
          })}
          {isCorrectAnswer !== null ? (
            isCorrectAnswer ? (
              <Alert
                icon={<CheckIcon fontSize="large" />}
                severity="success"
                variant="filled"
              >
                <Typography variant="h5">The answer is correct !</Typography>
              </Alert>
            ) : (
              <Alert
                icon={<FmdBadIcon fontSize="large" />}
                severity="error"
                variant="filled"
              >
                <Typography variant="h5">Wrong Answer, Try Again !</Typography>
              </Alert>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ColorBox;
