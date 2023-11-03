import React from 'react';
import './navbar.css';
import { InstagramLogo,FacebookLogo } from 'phosphor-react';

const Footer = () =>{
const names=['Nitin(Team Leader)','Beerling','Roopali','Akash']

  
    return (
        <footer className="footer">
          <div className='links'>
          <p>&copy; 2023 GadgetsGeeks. All rights reserved.</p>
          <p>Contact us at: gadgetsgeeks.com</p>
          <p>Follow us on: <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32} color='white' style={{ verticalAlign: 'middle' }} /></a><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookLogo size={32} color='white' style={{ verticalAlign: 'middle' }} /></a></p></div>

        <div className='team'>
          <p>Team members:</p>
          <div className='members'>
          {names.map((name)=>( <span style={{display:'block',width:'300px',margin:'auto'}}>{name}</span>) 
          )
        }
</div>

        </div>
        
        </footer>
      );
    };
export default Footer;
