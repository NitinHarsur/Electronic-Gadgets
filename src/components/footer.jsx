import React from 'react';
import './navbar.css';
import { InstagramLogo,FacebookLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <footer className="footer">
          <p>&copy; 2023 Electronic Gadgets. All rights reserved.</p>
          <p>Contact us at: electronicgadgets.com</p>
          <p>Follow us on: <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32} color='white' style={{ verticalAlign: 'middle' }} /></a><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookLogo size={32} color='white' style={{ verticalAlign: 'middle' }} /></a></p>
        </footer>
      );
    };
export default Footer;
