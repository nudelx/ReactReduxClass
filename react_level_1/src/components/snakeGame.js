import React from 'react'
import Board from './board'
import Snake from './snake'
const SnakeGame = ( ) => {
  const basicConfig = { width: 920, height:700 }
  return (
    <div>
      <Board {...basicConfig}>
        {( props ) => <Snake {...props}/>}
      </Board>
    </div>
  )
}

export default SnakeGame
