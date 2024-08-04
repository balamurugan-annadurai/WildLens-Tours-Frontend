import React from 'react'
import "./Layout.css"
import '../Sections/Sections.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container inner-ft-container">
                <div className="brand-container">
                    <div className="logo">
                        <h1 className='d-flex align-items-center'><i className='bx bxs-leaf mx-2'></i>WildLens Tours</h1>
                    </div>
                    <div className="social-icons">
                        <i class='bx bxl-facebook' ></i>
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-linkedin' ></i>
                    </div>
                </div>

                <div className="info-container custom-ft">
                    <h4 className='gree-secondary'>Information</h4>
                    <ul>
                        <li><a href="#" className='green'>Home</a></li>
                        <li><a href="#about" className='green'>About</a></li>
                        <li><a href="" className='green'>Explore</a></li>
                        <li><a href="#contact" className='green'>Contact</a></li>
                    </ul>
                </div>

                <div className="contact-details-container custom-ft">
                    <h4 className='gree-secondary'>Contact</h4>
                    <ul>
                        <li className='green'>+91 1234567890</li>
                        <li className='green'>contact@xyz.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer