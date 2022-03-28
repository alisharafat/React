import React from 'react'

export default function (props) {
    console.log(props.alert);
  return (
    <div className='alertContainer'>{props.alert}</div>
  )
}
