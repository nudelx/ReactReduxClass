import React, { Component } from 'react'

class Snake extends Component {

  state = {
    x: 300,
    y: 300,
    calcStep: {
      'KeyI': {'axis': 'y', sign: -1},
      'KeyJ': {'axis': 'x', sign: -1},
      'KeyL': {'axis': 'x', sign: 1 },
      'KeyK': {'axis': 'y', sign: 1 }
    }
  }

  magicMove(axis, axisValue) {
    const {height,  width} = this.props
    if (axis === 'y') {
      return (axisValue < 0 ) ? height : ( axisValue > height ) ? 0 : axisValue
    } else {
      return (axisValue < 0 ) ? width : ( axisValue > width ) ? 0 : axisValue
    }
  }

  updatePosition = (e) =>  {
    const { calcStep } = this.state
    const { height,  width, step, foodY, foodX, toggleFood} = this.props
    console.log(this.props)
    const { [e.code]: { axis, sign } } = calcStep
    const { [axis]: axisValue } = this.state

    this.setState({
      [axis]: this.magicMove(axis, axisValue +(step*sign))
    }, () => {
        if (foodY === this.state.y && foodX === this.state.x) {
          toggleFood()
        }
    })
  }

  componentDidMount() {
    const body = document.querySelector('body')
    body.addEventListener('keypress', this.updatePosition)
  }

  render () {
    return (
      <div className='snake'>
        <div className='snake-head' style={{top: this.state.y, left: this.state.x}}></div>
      </div>
    )
  }

}


export default Snake
