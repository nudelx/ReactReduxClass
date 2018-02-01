import React, { Component } from 'react'

class ReactClass4 extends Component {

  // mounting
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    console.log('componentWillMount', arguments)
  }

  render () {
    console.log('render', arguments)
    return (<div>{'render'}</div>)
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
