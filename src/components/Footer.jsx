import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.ico'
import './styles/Footer.css'


function Footer() {
    return (
        <div className='footer section__padding'>
            <div className="footer-links">
                <div className="footer-links_logo">
                    <div>
                        <img src={logo} alt="logo" />
                        <p>CryptoKet</p>
                    </div>
                    <div>
                        <h3>Get the lastes Updates</h3>
                    </div>
                    <div className='footer_help_btn'>
                        <button>Raise a Ticket!</button>
                        <button>Email Me!</button>
                    </div>
                </div>
                <div className="footer-links_div">
                    <h4>Art Collectors</h4>
                    <Link to="/"><p>Explore</p></Link>
                    <Link to="/about/help"><p>How it Works[Tutorial]</p></Link>
                    <Link to="/help"><p>Contact Us</p></Link>
                </div>
            </div>
            <div className="footer-copyright">
                <div>
                    <p> © {(new Date().getFullYear())} CrpytoKet, Inc. All Rights Reserved</p>
                </div>
                {/* <div>
          <AiOutlineInstagram size={25} color='white' className='footer-icon' />
          <AiOutlineTwitter size={25} color='white' className='footer-icon'/>
          <RiDiscordFill size={25} color='white' className='footer-icon'/>
          <FaTelegramPlane size={25} color='white'  className='footer-icon' />
        </div> */}

            </div>
        </div>

    )
}

export default Footer