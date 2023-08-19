import React from 'react'

export const Button = ({ text, onClick, animate}) => {
  return (
    <button className={`btn ${animate ? ' hover:animate-bounce' : ''}`} onClick={onClick}>
      {text}
    </button>
  )
}
