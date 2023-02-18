import React from 'react'
import Article from '../../../components/Article/Article'
import solarServices from '../../../data/solarService.json'
import { solarServiceHero } from '../../../data/HeroData'
import Header from '../../../components/Header/Header'
import './SolarInstallations.css'
import Hero from '../../../components/Hero/Hero'

const SolarInstallations = () => {
  return (
    <>
        <Header text='Professional residential solar installation services'
                imgPath='../../../assets/residential-solar-installations.png' />
        <main>
          <Hero title={solarServiceHero.title}
                texts={solarServiceHero.texts}
                contactText={solarServiceHero.contactText}
                imgPath={solarServiceHero.imgPath} />
          <section id='main' className='pb-0 py-0 p-md-0'>
            <div className='container-grid'>
              {
                solarServices && solarServices.map((service, index) => (
                    <>
                      <Article key={service.id}
                               articleNb={index + 1}
                               title={service.title}
                               texts={service.texts}
                               imgPath={service.imgPath} />
                    </>
                ))
              }
            </div>
          </section>
          <section id="process">
            <div className="container">
              <h2 className="display-1 text-capitalize mb-5 fw-normal lh-base text-center text-white">
                the process of home solar installations
              </h2>
              <p className='text-white fs-5'>While every system is different, the basic process of investing in solar looks something like this:</p>
              <ol className="list-group-numbered">
                <li className='list-group-item'>We will need your basic information, such as your home address to get started. We can also provide information on all applicable rebates and tax incentives available.</li>
                <li className='list-group-item'>A copy of your recent utility bill will help us see the amount of power your home typically uses, allowing us to better design a system for your needs.</li>
                <li className='list-group-item'>We would like to understand what are the major energy drains for your home, like air conditioners and hot tubs, and if there are permanent residents living on the property.</li>
                <li className='list-group-item'>From here, we design your system and give you at least two, if not, three options so you can see what is available for your situation. </li>
                <li className='list-group-item'>Once you have chosen the best system for your home, we begin the process of installing the system on your roof.</li>
                <li className='list-group-item'>Once installed, we test the system thoroughly to ensure that it works as intended and generates power efficiently.</li>
                <li className='list-group-item'>Warranty is included from our premium manufacturers - with inverters having 10-15 years and panels having a 25-year warranty.</li>
              </ol>
            </div>
          </section>
        </main>
    </>
  )
}

export default SolarInstallations