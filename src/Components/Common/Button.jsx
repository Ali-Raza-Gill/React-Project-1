import React from 'react'

export default function Button(props) {
  const {text}=props
  return (
    <button className='btn btn-primary rounded-0' >{text}</button>
  )
}
