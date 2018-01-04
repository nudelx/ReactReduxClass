import React from 'react'
import PropTypes from 'prop-types'

const User = ({ title, name }) => (
  <div className="user">
    <div className="img"></div>
    <div className="data">
      <div className="title">{title}</div>
      <div className="name">{name}</div>
    </div>
  </div>
)
//
// const PropTypes = {
//   string: (...args) => {  // props, propName,  ComponentName
//     const [props, propName, ComponentName] = args
//     if (props[propName]) {
//       console.warn('isRequired');
//     }
//     if (props[propName] && typeof props[propName] === 'string') {
//       console.warn('bla bla ');
//     }
//   }
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}


export default User
