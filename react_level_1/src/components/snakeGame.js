import React from 'react'
import Board from './board'
import Snake from './snake'
import Food  from './food'

const randomPosition = (max, min) =>  Math.floor(Math.random() * max) + min
const SnakeGame = ( ) => {
  const basicConfig = { width: 920, height:700, step: 20 }
  let foodX = randomPosition(basicConfig.width, 0)
  let foodY = randomPosition(basicConfig.height, 0)
  foodX = foodX - (foodX % basicConfig.step)
  foodY = foodY - (foodY % basicConfig.step)
  return (
    <div>
      <Board {...basicConfig}>
        <Snake {...basicConfig}/>
        <Food foodX={foodX} foodY={foodY}/>
      </Board>
    </div>
  )
}

export default SnakeGame
