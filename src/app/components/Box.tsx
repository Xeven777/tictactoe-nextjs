"use client";

import { useEffect, useState } from "react";

const Box = () => {
  const [turn, setTurn] = useState("X");
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [end, setEnd] = useState(false);
  const [winner, setWinner] = useState("");
  let message;
  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      setWinner(winner);
      
      setEnd(true);
    }
  }, [boxes]);

  function handleclick(i: number) {
    const newCount = count + 1;
    const newBoxes = boxes.slice();
    newBoxes[i] = turn;
    setCount(newCount);
    if (count === 8) {
      setEnd(true);
    }
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
    for (const [a, b, c] of wins) {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
        
      }
    }
    return null;
  }

  function resetGame() {
    setEnd(false);
    setCount(0);
    setBoxes(Array(9).fill(""));
    setTurn("X");
  }
  if (count <= 8 && !end) {
    message = `${turn}'s turn`;
  } else if (!winner) {
    message = "Game Over. Its a Draw";
  } else message = `${winner} wins!`;
  return (
    <div className="p-2 flex flex-col">
      <div className="my-3 text-center text-lg font-semibold text-slate-900 dark:text-slate-200">
        {message}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {boxes.map((box, i) => (
          <button
            key={i}
            type="button"
            className={`w-20 h-20 shadow shadow-slate-500 ${
              box === "X"
                ? "text-blue-500 bg-slate-100"
                : box === "O"
                ? "text-red-600 bg-slate-100"
                : "bg-slate-300"
            } font-bold text-4xl rounded-md active:scale-95 hover:bg-slate-200 transition-all active:rotate-3`}
            onClick={() => handleclick(i)}
            disabled={box !== "" || end}
          >
            {box}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-8 mx-auto px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-md active:scale-95 hover:bg-slate-300 transition-all"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Box;
