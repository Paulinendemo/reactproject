

import React from "react";

function Recipe({ setIndex }) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = 0;
  return (
    <>
      {letters.map((item) => {
        return (
          <div className="index" key={num++} onClick={() => setIndex(item)}>
            <h4>{item}</h4>
          </div>
        );
      })}
    </>
  );
}

export default Recipe;