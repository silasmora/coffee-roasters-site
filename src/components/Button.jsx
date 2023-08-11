import React from 'react'

export const Button = ({ text, onClick}) => {
  return (
    <button className={`btn`} onClick={onClick}>
      {text}
    </button>
  )
}
