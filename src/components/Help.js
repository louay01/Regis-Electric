import React from 'react'

const Help = ({ title, texts }) => {
  return (
    <div className='col-12 col-xl-4 my-md-5' style={{'marginBottom': '4rem'}}>
        <h4 className="text-uppercase mb-4 fw-bold">{title}</h4>
        <div>
            {
                texts && texts.map((text, index) => (
                    <p key={index} className="article-description mb-2 text-white">{text}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Help