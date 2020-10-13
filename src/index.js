import React from "react";
import ReactDOM from "react-dom";

// Create vars for first and last name
// create random number from 1-10
// say hello and random number

const fName = "Cody";
const lName = "Jones";
const randNum = Math.ceil(Math.random(1, 10) * 10);

ReactDOM.render(
  <>
    <h1>
      Hello, {fName} {lName}.
    </h1>
    <p>Your random number of the day is: {randNum}.</p>
  </>,
  document.getElementById("root")
);
