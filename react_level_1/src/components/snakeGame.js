import React, { Component } from 'react'
import Board from './board'
import Snake from './snake'
import Food from './food'

class SnakeGame extends Component {
  state = {
    width: 920,
    height: 700,
    step: 20,
    foodX: 0,
    foodY: 0,
    foodVisible: false
  }

  componentDidMount() {
    this.calcFoodPosition()
  }

  toggleFood = () =>
    this.setState(
      { foodVisible: !this.state.foodVisible },
      () => !this.state.foodVisible && this.calcFoodPosition()
    )

  randomPosition(max, min) {
    return Math.floor(Math.random() * max) + min
  }

  calcFoodPosition() {
    let foodX = this.randomPosition(this.state.width, 0)
    let foodY = this.randomPosition(this.state.height, 0)
    foodX = foodX - foodX % this.state.step
    foodY = foodY - foodY % this.state.step
    this.setState({ foodX, foodY, foodVisible: true })
  }

  render() {
    const { foodX, foodY, foodVisible } = this.state
    return (
      <div>
        <Board {...this.state}>
          <Snake {...this.state} foodX={foodX} foodY={foodY} toggleFood={this.toggleFood}/>
          {foodVisible && <Food foodX={foodX} foodY={foodY} />}
        </Board>
      </div>
    )
  }
}

export default SnakeGame
