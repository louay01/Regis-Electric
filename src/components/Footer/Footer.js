import React from 'react'
import './Footer.css'
import { FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="row footer-row justify-content-around gy-5">
                <div class="col-md-4 item">
                    <h3>Regis Electric</h3>
                    <div>
                        <a className='text-decoration-underline mb-1' href="https://wa.me/18087553297" target="_blank">P: +1808-755-3297</a>
                        <p className='mb-0 text-white mb-1'>74-5565 Luhia St. Suite A1A</p>
                        <p className='mb-0 text-white mb-1'>Kailua Kona, HI 96740</p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Solar Installations</a></li>
                        <li><a href="#">Home Automation</a></li>
                        <li><a href="#">Electrical Services</a></li>
                    </ul>
                </div>
                <div class="col-md-2 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-2 item d-md-flex flex-column align-items-end">
                    <h3>Locations</h3>
                    <ul>
                        <li><a href="#">Big Island</a></li>
                        <li><a href="#">Kailua Kona</a></li>
                        <li><a href="#">Oahu</a></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
            <div class="col-12 item text-center">
                <div className="social">
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
                <p class="copyright">Regis Electric © 2023</p>
                </div>
            </div>
        </div>
    </footer>
  )
  
}

export default Footer