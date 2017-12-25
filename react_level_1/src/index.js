import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';
import './index.css'
// import PropTypes from 'prop-types';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<MyComponent />, document.getElementById('root'));
// registerServiceWorker();

// var root = document.querySelector('#root')
// console.log(root)
// var el = document.createElement('div')
// el.textContent = 'Alex'
// el.className = 'test'
// root.appendChild(el)

//
//
// const MyComponent = ({children}) => <div>{children}</div>
// MyComponent.propTypes = {
//   msg: PropTypes.string.isRequired
// }
//
//

NOT React
var root = document.querySelector('#root')
console.log(root)
var el = document.createElement('div')
el.textContent = 'Alex'
el.className = 'test'
root.appendChild(el)


//REACT
const AlexComponent = function({ children, msg }) {
  return (
    <div>
      {children}
      {msg ? <div>{msg}</div> : null}
    </div>
  )
}
ReactDOM.render(
  <AlexComponent >
    <div>
      I am a kid<div>
        I am a kid <div>I am a kid</div>
      </div>
    </div>
  </AlexComponent>,
  document.querySelector('#root')
)

// ReactDOM.render(React.createElement(
//   AlexComponent,
//   null,
//   React.createElement(
//     'div',
//     null,
//     'I am a kid',
//     React.createElement(
//       'div',
//       null,
//       'I am a kid ',
//       React.createElement(
//         'div',
//         null,
//         'I am a kid'
//       )
//     )
//   )
// ), document.querySelector('#root'));
