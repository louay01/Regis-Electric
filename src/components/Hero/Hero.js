import React from 'react'
import Button from '../Button/Button'
import './Hero.css'

const Hero = ({ title, texts, contactText, imgPath }) => {
  return (
    <section id='hero' style={{backgroundImage: `url(${imgPath})`}}>
        <div className="container text-center">
          <h2 className='display-1 text-uppercase mb-4 mb-md-5 fw-normal lh-base'>{title}</h2>
          <div className='fs-4 fw-normal'>
            {
                texts && texts.map((text, index) => <p key={index}>{text}</p>)
            }
          </div>
          <div className='contact'>
            <p className='fw-normal'>{contactText}</p>
            <div className="contact-us-btn">
              <Button path={'/contact'}
                      text='contact us today' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero