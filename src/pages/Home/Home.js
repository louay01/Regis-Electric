import React from 'react'
import services from '../../data/services.json'
import helpSections from '../../data/helpSectionData.json'
import Article from '../../components/HomeArticle/Article'
import Help from '../../components/Help'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {
    return (
        <>
            <Header text='The best in solar and home automation services'
                    imgPath='../../assets/regis-electric-hawaii.jpg' />
            
            <main>
                <section id='services' className="pb-5 pt-0 py-md-0">
                    <div className='container'>
                        <div className='container-grid'>
                            {
                                services && services.map((service, index) => 
                                    <Article key={service.id}
                                             articleNb={index+1}
                                             title={service.title}
                                             texts={service.texts}
                                             imgSrc={service.imgSrc}
                                             imgAlt={service.imgAlt}
                                             btnPath={service.btnPath}
                                             btnText={service.btnText} />
                                )
                            }
                        </div>
                    </div>                    
                </section>
                <section id="help" className='p-sm-0'>
                    <div className="container-fluid overflow-hidden">
                        <div className="help min-vh-100 d-flex flex-column justify-content-center align-items-center text-center text-light">
                            <h2 className="section-header my-5 display-1 fw-normal text-capitalize">Why call us first?</h2>    
                            <div className="row gx-5 px-n-1">
                                {
                                    helpSections && helpSections.map(section => (
                                        <Help key={section.id}
                                              title={section.title}
                                              texts={section.texts} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home