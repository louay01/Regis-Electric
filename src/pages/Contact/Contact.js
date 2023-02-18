import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <main className='overflow-hidden'>
            <section id="contact">
                <div className="container h-100">
                    <div className="row contact-us-row g-5">
                        <div className="col-12 col-md-6">
                            <h1 className='display-1 mb-3 mb-md-5 fw-bold lh-base text-uppercase'>Questions?</h1>
                            <div>
                                <p>In case you have any questions, or you need help please do not hesitate to contact us.</p>
                                <p>We answer all inquiries in the order we receive them and try our best to be quick with our responses! 
                                    Please allow 1-3 days for a response. If this is an emergency, please call us.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 ps-md-5">
                            <form>
                                <div className="mb-3">
                                    <input type="text" name='name' className="form-control" placeholder='Name'/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" name='email' className="form-control" placeholder='Email' />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" name="message" rows="4" placeholder='Your Message...'></textarea>
                                </div>
                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
    
  )
}

export default Contact