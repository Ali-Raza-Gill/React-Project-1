import React from 'react'

export default function Button(props) {
  const {text}=props
  return (
    <button className='btn btn-info rounded-0' >{text}</button>
  )
}
