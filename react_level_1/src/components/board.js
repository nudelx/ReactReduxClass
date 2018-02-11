import React from 'react'


const Board = ({children, width, height}) => {
  return (
    <div className="game-board">
      {children({ width, height })}
    </div>
  )
}

export default Board
