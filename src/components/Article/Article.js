import React from 'react'
import './Article.css'

const Article = ({ articleNb, title, texts, imgPath, isFromHomeAutomation }) => {
  return (
    <article className='pt-5 py-md-0'>
        <div className={`row h-100 gx-0 ${articleNb % 2 === 0 && 'flex-md-row-reverse'}`} style={{minHeight: `${isFromHomeAutomation ? '70vh' : 'auto' }`}}>
            <div className='col-12 col-md-6'>
              <div className="container h-100 d-md-flex flex-column justify-content-center">
                <div className="article-content">
                  <h3 className="fw-normal fs-1 mb-3 mb-md-4 text-capitalize">{title}</h3>  
                  <div className="article-description">
                    {
                      texts && texts.map((text, index) => (
                        <p key={index}>
                          {text}
                        </p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="article-image" style={{backgroundImage: `url(${imgPath})`}}></div>
            </div>
        </div>
    </article>
  )
}

export default Article