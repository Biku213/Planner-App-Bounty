import React, { useState } from 'react';

export default function TicTacToeWidget() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const checkForWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);

      const winner = checkForWinner();
      if (winner) {
        setWinner(winner);
      }
    }
  };

const renderCell = (index) => {
    const cellValue = board[index];
    const cellClassName = cellValue ? `item cell ${cellValue}` : 'item cell';
    return (
      <div className={cellClassName} onClick={() => handleCellClick(index)}>
        {cellValue}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((cell) => cell !== null)) {
    status = "It's a draw!";
  } else {
    status = `Current Player: ${currentPlayer}`;
  }

  return (
    <div className="widget-container">
      <div className="board">
        <div className="board-row">
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
      </div>
      <div className="board">
        <div className="board-row">
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
      </div>
      <div className="board">
        <div className="board-row">
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
     </div>
    
  );
  
}


