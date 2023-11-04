import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import {ShoppingCart,House,User,UsersFour,ArrowCircleRight} from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='header'> 
     <h1 style={{backgroundColor:'black',color:'white',display:'inline-block'}}> GadgetsGeeks </h1>
     <div className='dots' >
      <span ></span>
      <span ></span>
      <span ></span>
      </div> <br /><br />
    <nav className="nav">
      <ul className="list">
      <li><Link to=""><House size={32} style={{ verticalAlign: 'middle' }}/>Home</Link></li>
        <li><Link to="/login"><ArrowCircleRight size={32} style={{verticalAlign:'middle'}}/>Log-In</Link></li>
        <li><Link to="/contact"><User size={32} style={{ verticalAlign: 'middle' }}/>Contact</Link></li>
        <li><Link to="/about"><UsersFour size={32}  style={{ verticalAlign: 'middle' }}/>About</Link>  </li>
        <li><Link to="/cart"><ShoppingCart size={32}  style={{ verticalAlign: 'middle' }}/>Cart</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;

