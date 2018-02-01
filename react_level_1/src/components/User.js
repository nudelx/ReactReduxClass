import React from 'react'
import PropTypes from 'prop-types'

const style2 = {
  border: '1px solid red'
}

const User = ({ style, ...all }) => {
    // console.log('render')
    const combined = { ...style2, ...style}
    return (
      <div className="user" style={combined} >
        <div className="img"></div>
        <div className="data">
          <div className="title">{all.title}</div>
          <div className="name">{all.name}</div>
        </div>
      </div>
    )
}

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
  name: PropTypes.string,
  title: PropTypes.string
}


export default User
