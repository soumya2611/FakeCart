import React from 'react'
import './footer.css'
import ig_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import footerLogo from '../Assets/logo_big.png'
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={footerLogo} alt="" />
    <p>Fakekart</p>
</div>
<ul className="footer-links">
    <li className='grow-on-hover'>Company</li>
    <li className='grow-on-hover'>Products</li>
    <li className='grow-on-hover'>Offices</li>
    <li className='grow-on-hover'>About</li>
    <li className='grow-on-hover'>Contact</li>
</ul>
<div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={ig_icon} alt="" />
        </div>
        <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
        <img src={pintrest_icon} alt="" />
        </div>
      
</div>
<div className="footer-copyright">
<hr />
    <p> ©  2024 AMBER. All rights reserved.
    </p>
    
</div>
    </div>
  )
}

export default Footer