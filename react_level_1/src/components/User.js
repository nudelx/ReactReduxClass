import React from 'react'


const User = ({ title, name }) => (
  <div className="user">
    <div className="img"></div>
    <div className="data">
      <div className="title">{title}</div>
      <div className="name">{name}</div>
    </div>
  </div>
)


export default User
