import React from 'react'

const Food = ({ foodX, foodY }) => {
  return (<div className='food' style={{top:foodY, left: foodX}}></div>)
}

export default Food
