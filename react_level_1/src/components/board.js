import React from 'react'


const Board = ({children, width, height, foodX, foodY}) => {
  return (
    <div className="game-board">
      {children}
    </div>
  )
}

export default Board
