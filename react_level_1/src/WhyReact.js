
import React from 'react'
import ReactDOM from 'react-dom'

export const TestJS = () => {
  const body = document.querySelector('#root')
  const JSWay = function() {
    const time = new Date().toLocaleTimeString()
    const element = `TIME: <br > <input value="${time}" /> <br> <input value="${time}" />`
    body.innerHTML = element
  }
  setInterval(JSWay, 1000)
}


export const TestReact = () => {
  const body = document.querySelector('#root')
  const ReactWay = function() {
    const time = new Date().toLocaleTimeString()
    const element = (<div>TIME:<input value={time} /><input value={time} /> </div>)
    ReactDOM.render(element, body )
  }
  setInterval(ReactWay, 1000)
}
