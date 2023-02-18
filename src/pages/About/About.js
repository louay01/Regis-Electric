import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Faq from '../../components/Faq/Faq'
import faqs from '../../data/faq.json'

const About = () => {
  return (
    <>
      <Header  text='Regis Electric: powering your home with renewable energy'
               imgPath='../../assets/about-regis-electric-hawaii.jpg' />

      <main>
        <section id='about'>
          <div className="container">
            <small className='small-title'>who we are</small>
            <h2>
              Regis Electric is a leading high-end home solar installations and automation solutions provider. 
              We serve the Big Island of Hawaii, focusing on Kailua Kona, and have our reach to Oahu Island.
            </h2>
            <div className="article-description">
              <p>
                We believe that solar power is the way of the future, and we are dedicated to helping our clients switch to renewable energy. 
                We offer various solar panel options to suit your needs, and our team of experienced professionals 
                will work with you to determine the best way to power your home.
              </p>
              <p>
                We are the Big Island and Oahu experts in solar and home automation services - 
                contact us today to find out why we enjoy a 12+ year reputation as the leaders in what we do.
              </p>
            </div>
          </div>
        </section>
        <section id='mission'>
          <h2 className='display-2 text-capitalize mb-5 fw-normal lh-base text-center'>the regis electric difference</h2>
          <div className="expertise">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <article>
                  <h3>deep industry knowledge</h3>
                  <p>Over the years, we have worked with all types of solar panels and understand the best options available. This knowledge lets us provide unbiased advice on which panels will work best for your home.</p>
                  <p>In addition, we have installed solar panel systems in different situations for over a decade, so we know what works and what doesn't.</p>
                </article>
              </div>
              <div className="col-12 col-md-6">
                <article className='bg-white'>
                  <h3>national partnerships</h3>
                  <p>We are proud to partner with some of the leading solar manufacturers in the country. This allows us to offer our clients competitive pricing on the best solar panel brands and other equipment.</p>
                  <p>We only work with the best brands in the industry to ensure that our clients get high-quality products that will last for decades.</p>
                </article>
              </div>
            </div>
            <div className="row g-0 flex-md-row-reverse">
              <div className="col-12 col-md-6">
                <article>
                  <h3>customized solutions</h3>
                  <p>Every home is different, and every family has unique energy needs. That's why we offer customized solar solutions designed to meet your specific needs.</p>
                  <p>We take the time to assess your home's energy usage and determine the best way to utilize solar power.</p>
                </article>
              </div>
              <div className="col-12 col-md-6">
                <article className='bg-white'>
                  <h3>state of the art equipment</h3>
                  <p>Excellence is our standard, so we only use the best equipment for our home solar installations and automation solutions. We are constantly upgrading our equipment to ensure we use the latest technology.</p>
                  <p>This allows us to provide our clients with the best quality service possible.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id='job'>
          <div className="container">
            <small className='small-title'>what do we do</small>
            <h2>
              We love saving homeowners money with solar installations and making lives more comfortable with home automation systems.
              If you’re looking to save money on the cost of electricity, get in touch with Regis Electric to see how we can help.
            </h2>
            <div className="article-description">
              <p>
                We love saving homeowners money with solar installations and making lives more comfortable with home automation systems.
              </p>
              <p>
                If you’re looking to save money on the cost of electricity, get in touch with Regis Electric to see how we can help.
              </p>
            </div>
          </div>
        </section>
        <section id="aim">
            <div className="container">
              <h2 className="display-1 text-capitalize mb-5 fw-normal lh-base text-center text-white">
                why call us first?
              </h2>
              <p className='text-white article-description'>
                With over 12 years of experience in solar installation, Regis Electric is your trusted partner for all your solar needs. We work with you to determine the best solar panel installation for your home, 
                and we provide a complete installation service so that you can start saving money on your energy bills.
              </p>
              <div className="our-services fs-5">
                <p className='text-white article-description'>Our home solar installation services include:</p>
                <ul className="list-group list-group-flush">
                  <li className='list-group-item'>A thorough assessment of your home's energy needs</li>
                  <li className='list-group-item'>Customized solar panel solution</li>
                  <li className='list-group-item'>We would like to understand what are the major energy drains for your home, like air conditioners and hot tubs, and if there are permanent residents living on the property.</li>
                  <li className='list-group-item'>Solar panel selection</li>
                  <li className='list-group-item'>Professional installation of your solar panels</li>
                  <li className='list-group-item'>Thorough testing and support</li>
                  <li className='list-group-item'>Federal and State tax incentives</li>
                  <li></li>
                </ul>
              </div>
            </div>
        </section>
        <section id='faq'>
            <div className="container">
              <h5 className='text-uppercase text-center fw-normal'>faq</h5>
              <h2 className='display-1 text-capitalize mb-5 fw-normal lh-base text-center'>frequently asked questions</h2>
              {
                faqs && faqs.map(faq => (
                  <Faq key={faq.id}
                       question={faq.question}
                       answer={faq.answer} />
                ))
              }
            </div>
        </section>
        <section id="testimonials">
          <div className="container">
            <h5 className='text-uppercase text-center fw-normal'>testimonials</h5>
            <h2 className='display-1 text-capitalize mb-5 fw-normal lh-base text-center'>take it from our clients!</h2>
            <div id="carouselExampleIndicators" className="carousel slide carousel-dark slide" data-bs-interval="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                <figure>
                    <img src="../../assets/REGIS+ELECTRIC.jpg" className='fig-img' alt="Elephant at sunset" />
                    <figcaption>Solar Panels and Enphase System Install by Regis Electrics</figcaption>
                </figure>
                  <p>
                    "Regis installed our PV system and provides service on an ongoing basis. Their people are knowledgeable, courteous, 
                    and on-time. We use them for maintenance including panel cleaning and support. We appreciate their aloha attitude and reasonable prices.”
                  </p>
                  <p>— Louise Cohen on Google</p>
                </div>
                <div className="carousel-item">
                  <figure>
                      <img src="../../assets/roof.jpeg" className='fig-img' alt="Elephant at sunset" />
                      <figcaption>Solar Panels and Enphase System Install by Regis Electrics</figcaption>
                  </figure>
                  <p>
                    "Regis installed our PV system and provides service on an ongoing basis. Their people are knowledgeable, courteous, 
                    and on-time. We use them for maintenance including panel cleaning and support. We appreciate their aloha attitude and reasonable prices.”
                  </p>
                  <p>— Peter S. on Yelp</p>
                </div>
                <div className="carousel-item">
                  <p>
                    “I managed the Villages at Mauna Lani for nearly ten years, in that time I had around eighty photovoltaic solar arrays installed, 
                    more than seventy of those installs used Regis Electric. The reason Regis Electric was chosen, is as they offered fair prices, 
                    knew precisely what they were doing, were fast and the quality was superb. The expert service and advice were second to none. 
                    Now after many years of service, solar arrays are all working well or quickly repaired if a problem arises. 
                    Regis Electric has also repaired photovoltaics installed by other companies. I have no hesitation recommending this company 
                    for any electrical work, from domestic to commercial. All the staff I met were respectful and courteous and a pleasure to work with.”
                  </p>
                  <p>— Kelly W. on Yelp</p>
                </div>
                <div className="carousel-item">
                  <figure>
                      <img src="../../assets/Pika+Installation.jpg" className='fig-img' alt="Elephant at sunset" />
                      <figcaption>Pika/Generac solar installation with 35 kWh storage capacity</figcaption>
                  </figure>
                  <p>
                    "Wow. What a great company to work with. Solar installation fast and friendly and clean.
                    This company gets it, customers just want the job done as fast as possible with as little disruption as possible. T
                    hat's what you get when you hire Regis.”
                  </p>
                  <p>— Ben I. on Yelp</p>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About