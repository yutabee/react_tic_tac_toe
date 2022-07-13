import Square from "./Square";
import "../App.css";
// import { useState } from "react";

const Board = (props) => {
  // const [history, setHistory] = useState(Array(9).fill(null));  //全てnullで埋める
  // const [xIsNext, setXIsNext] = useState(true);  //x or o

  // const handleClick = (boardNumber) => {
  // const newHistory = [...history];
  // newHistory[boardNumber] = xIsNext ? "X" : "O";

	// setHistory(newHistory);
  // setXIsNext(!xIsNext);
  // };
  
//   const renderSquare = (boardNumber) => {
//   return (
//     <Square
//       value={history[boardNumber]}
//       onClick={() => handleClick(boardNumber)}
//     />
//   );
// };

  return (
    <div>
      <div className="board">
        {/* {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)} */}
        {/* {history.map((val, index) => (
          <Square key={index} value={val} onClick={() => handleClick(index)} />
        ))} */}
         {props.history.map((val, index) => (
          <Square key={index} value={val} onClick={() => props.onClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Board;