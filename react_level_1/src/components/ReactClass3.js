import React from 'react'
import User from './User'

const ReactClass3 = () => {

  // const userProps = {
  //   title: 'Master Jedi',
  //   name: 'Yoda'
  // }
  //
  // const style = {
  //   backgroundColor: '#000'
  // }
  //
  // const style2 = {
  //   border: '1px solid red'
  // }

  const a = { title: "Master Jedi", name:"Yoda"}
  const b = [1,2,3,4,5]
  return (
    <div>
      {
        b.map((item) => <User key={item} title={`${a.title}${item}`} name={`${a.name}${item}`} />)
      }
    </div>
  )

}


export default ReactClass3
