import Board from './Board';
import '../App.css';
import { useState } from 'react';

const Game = () => {

  const [history, setHistory] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);    //追加、nullで初期化

  //クリックされたマス目の位置をboardNumberとして受け取る
	const handleClick = (boardNumber) => {
        const newHistory = [...history];

        //winnerを条件に追加し、or条件にする
	  if (winner || newHistory[boardNumber]) {
	    return;
	  }
	 
        //すでに置かれていたら場合はスキップ
	  if (newHistory[boardNumber]) {
	    return;
	  }
	
	  newHistory[boardNumber] = xIsNext ? "X" : "O";
	
	  setXIsNext(!xIsNext);
      setHistory(newHistory);
        //追加、squaresを書き換えた後のデータで勝者判定
	  //その結果でwinnerを更新
	  setWinner(calculateWinner(newHistory));
	};
  

  const status = 'Next player: X';
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board history={history} onClick={handleClick} />
      </div>
      <div className="game-info">
      <div>
        {winner
          ? `Winner: ${winner}`
          : `Next player: ${xIsNext ? "X" : "O"}`}
      </div>
    </div>
    </div>
  );
};

export default Game;