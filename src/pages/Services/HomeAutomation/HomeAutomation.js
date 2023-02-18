import React from 'react'
import Header from '../../../components/Header/Header'
import homeAutomationServices from '../../../data/homeAutomationService.json'
import { homeAutomationServiceHero } from '../../../data/HeroData'
import Article from '../../../components/Article/Article'
import Hero from '../../../components/Hero/Hero'
import Help from '../../../components/Help'
import homeAutomationComponents from '../../../data/homeAutomationComponents.json'
import './HomeAutomation.css'

const HomeAutomation = () => {
  return (
    <>
      <Header text='home automation installation'
              imgPath='../../../assets/regis-electric-automation-home.jpg' />
      <main>
        <Hero title={homeAutomationServiceHero.title}
              texts={homeAutomationServiceHero.texts}
              contactText={homeAutomationServiceHero.contactText}
              imgPath={homeAutomationServiceHero.imgPath} />
        <section id='main' className='pb-0  py-0 p-md-0'>
          <Article key={homeAutomationServices[0].id}
                   articleNb={1}
                   title={homeAutomationServices[0].title}
                   texts={homeAutomationServices[0].texts}
                   imgPath={homeAutomationServices[0].imgPath} 
                   isFromHomeAutomation={true}/>

          <article id="benefits" className='my-0'>
            <div className="container">
              <h2 className="display-1 text-capitalize mb-5 fw-normal lh-base text-center">
                {homeAutomationServices[1].title}
              </h2>
              <ol className="list-group-numbered">
                {
                  homeAutomationServices[1].texts.map(text => (
                    <li className='list-group-item text-black' dangerouslySetInnerHTML={{__html: text}} />
                  ))
                }
              </ol>
            </div>
          </article>
          
          <Article key={homeAutomationServices[2].id}
                   articleNb={2}
                   title={homeAutomationServices[2].title}
                   texts={homeAutomationServices[2].texts}
                   imgPath={homeAutomationServices[2].imgPath}
                   isFromHomeAutomation={true} />
        </section>
        <section id="content" className='p-sm-0'>
          <div className="container-fluid overflow-hidden">
              <div className="help min-vh-100 d-flex flex-column justify-content-center align-items-center text-center text-dark">
                <div className="container">
                  <h2 className="section-header my-5 display-1 fw-normal text-uppercase">Learn more about home automation</h2>   
                  <div>
                    <p className='article-description mb-5 mb-md-0'>There are three main elements of a home automation system, which consist of controllers, sensors, and actuators.</p>  
                  </div> 
                  <div className="row gx-5 px-n-1">
                      {
                          homeAutomationComponents && homeAutomationComponents.map(section => (
                              <Help key={section.id}
                                    title={section.title}
                                    texts={section.texts} />
                          ))
                      }
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeAutomation