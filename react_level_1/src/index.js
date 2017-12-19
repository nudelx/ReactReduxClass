import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import PropTypes from 'prop-types';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<MyComponent />, document.getElementById('root'));
// registerServiceWorker();


var root = document.querySelector('#root')
console.log(root)
var el = document.createElement('div')
el.textContent = 'AAAAA'
el.className = 'test'
root.appendChild(el)

//
//
// const MyComponent = ({children}) => <div>{children}</div>
// MyComponent.propTypes = {
//   msg: PropTypes.string.isRequired
// }
//
//
// ReactDOM.render(<MyComponent children={'alex'}/>, document.getElementById('root'));
