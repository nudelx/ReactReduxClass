import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerValue: 0,
      timer: null
    }
  }

  startTimer = () => {
    const timer = setInterval(() => {
      this.setState({ timerValue: this.state.timerValue + 1 })
    }, 1)

    this.setState({ timer })
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
  }

  resetTimer = () => {
    this.setState({ timerValue: 0 })
  }

  render() {
    const { timerValue } = this.state
    return (
      <div className="Timer">
        <div className="view">{timerValue}</div>
        <div className="btn start">
          <button onClick={this.startTimer}>{'Start'}</button>
        </div>
        <div className="btn stop">
          <button onClick={this.stopTimer}>{'Stop'}</button>
        </div>
        <div className="btn reset">
          <button onClick={this.resetTimer}>{'Reset'}</button>
        </div>
      </div>
    )
  }
}

export default Timer
