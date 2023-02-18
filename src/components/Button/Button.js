import React from 'react'
import './Button.css'

const Button = ({ path, text, className, istargetBlank }) => {
  return (
    <a href={path} target={istargetBlank ? `_blank` : ''} className={`button ${className && className}`}>
        {text}
    </a>
  )
}

export default Button