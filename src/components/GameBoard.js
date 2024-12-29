import { useEffect, useState } from "react";
import './style.css'

function Square({shape, onClick}){
  const [clicked, setClicked] = useState(false);
  // function onClick() {
  //   console.log('clicked!');
  //   setClicked(true);
  // }

  return (
    <button className="square" onClick={onClick}>
      {shape}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [curShape, setCurShape] = useState("O");
  const [winner, setWinner] = useState("");
  function onClick (i) {
    if(squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = curShape;

    if(curShape==="O") setCurShape("X");
    else setCurShape("O");
    setSquares(nextSquares);
  }
  // calculate winner
  useEffect(() => {
    const win_player = chkWinner(squares);
    console.log(win_player);
    if(win_player) {
      setWinner(win_player);
      console.log(winner);
    }
  }, [squares])
  function chkWinner(squares){
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0 ; i < arr.length; i++){
      const [a, b, c] = arr[i];
      if(squares[a] === squares[b] && squares[b] === squares[c] && squares[a]){
        return squares[a];
      }
    }
  }
  return (
    <div>
      {winner === "" ? <h2>승부 중입니다.</h2> : <h2>{winner} 승리</h2>}
      <h>현재 차례 : {curShape}</h>
      <div className="board-row">
        <Square shape={squares[0]} onClick={() => onClick(0)}/>
        <Square shape={squares[1]} onClick={() => onClick(1)}/>
        <Square shape={squares[2]} onClick={() => onClick(2)}/>
      </div>
      <div className="board-row">
        <Square shape={squares[3]} onClick={() => onClick(3)}/>
        <Square shape={squares[4]} onClick={() => onClick(4)}/>
        <Square shape={squares[5]} onClick={() => onClick(5)}/>
      </div>
      <div className="board-row">
        <Square shape={squares[6]} onClick={() => onClick(6)}/>
        <Square shape={squares[7]} onClick={() => onClick(7)}/>
        <Square shape={squares[8]} onClick={() => onClick(8)}/>
      </div>
    </div>
  )
}