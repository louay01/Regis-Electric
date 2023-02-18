import React from 'react'
import Button from '../Button/Button'
import './Article.css'

const Article = ({ articleNb, title, imgSrc, imgAlt, texts, btnText, btnPath  }) => {
  return (
        <article className='pt-5 py-md-5'>
            <div className='article-grid'>
                <div className={`pt-lg-5 ${articleNb % 2 === 0 ? 'header-reverse' : 'header'}`}>
                    <h3 className="fw-normal fs-1 mb-3 mb-md-5 text-capitalize">{title}</h3>
                </div>
                <div className={`${articleNb % 2 === 0 ? 'img-reverse' : 'img'}`}>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className={`pb-lg-5 ${articleNb % 2 === 0 ? 'description-reverse' : 'description'} d-flex flex-column justify-content-around`}>
                    <div className="article-description">
                        {
                            texts && texts.map((text, index) => 
                                <p key={index} dangerouslySetInnerHTML={{__html: text}}/>
                            )
                        }
                    </div>
                    {
                        btnText && <div className='article-btn mt-md-2 mt-lg-5'>
                                        <Button path={btnPath}
                                                text={btnText} />
                                    </div>
                    }
                </div>
            </div>
        </article>
  )
}

export default Article