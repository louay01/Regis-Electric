import React from 'react'
import './Header.css'

const Header = ({ imgPath, text }) => {
  return (
    <header style={{backgroundImage: `url(${imgPath})`}}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

export default Header