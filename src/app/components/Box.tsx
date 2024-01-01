"use client";

import { useEffect, useState } from "react";

const Box = () => {
  const [turn, setTurn] = useState("X");
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(Array(9).fill(""));

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} wins!`);
      //   setBoxes(Array(9).fill(""));
      //   setTurn("X");
    }
  }, [boxes]);

  function handleclick(i: number) {
    setCount(count + 1);
    const newBoxes = boxes.slice();
    newBoxes[i] = turn;
    setBoxes(newBoxes);
    setTurn(turn === "X" ? "O" : "X");
  }

  function checkWinner() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(boxes);
    for (const [a, b, c] of wins) {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  }

  function resetGame() {
    setBoxes(Array(9).fill(""));
    setTurn("X");
  }
  return (
    <div className="p-2 flex flex-col">
      <div className="grid grid-cols-3 gap-2">
        {boxes.map((box, i) => (
          <button
            key={i}
            type="button"
            className="w-20 h-20 shadow shadow-slate-500 bg-slate-300 text-slate-900 font-bold text-4xl rounded-md active:scale-95 hover:bg-slate-400 transition-all"
            onClick={() => handleclick(i)}
            disabled={box !== ""}
          >
            {box}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 mx-auto px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-md active:scale-95 hover:bg-slate-400 transition-all"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Box;
