import React, { Component } from 'react'

class ReactClass4 extends Component {
  // more https://reactjs.org/docs/react-component.html
  // mounting
  constructor(props) {
    super(props);
    this.state = { test: true }
  }

  toggleState = () => this.setState({test: !this.state.test })

  componentWillMount() {
    console.log('componentWillMount', arguments)
  }

  render () {
    console.log('render', arguments)
    return (<div onClick={this.toggleState}>{'blaaa'}</div>)
  }

  componentDidMount() {
    console.log('componentDidMount', arguments)
  }

  // updating
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', arguments)
  }

  shouldComponentUpdate() {

    console.log('shouldComponentUpdate', arguments)
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', arguments)
  }

  // unmount
  componentWillUnmount() {
    console.log('componentWillUnmount', arguments)
  }

  // error
  componentDidCatch() {
    console.log('componentDidCatch', arguments)
  }
}


export default ReactClass4
