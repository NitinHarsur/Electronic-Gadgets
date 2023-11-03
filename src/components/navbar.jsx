


//           <div className="search">
//             <input
//               className="input"
//               type="text"
//               placeholder="Search"
//               style={{
//                 height: "30px",
//                 width: "450px",
//                 borderRadius: "5px",
//                 textAlign: "center",
//               }}
//             />
//             <button
//               type="submit"
//               style={{
//                 borderRadius: "5px",
//                 backgroundColor: "white",
//                 width: "32px",
//                 height: "32px",
//               }}
//             >
//               {SearchIcon}
//             </button>
//           </div>
//         </nav>
//         <hr color="#000000" size="3.5" />
//       </header>
//     </div>
//   );
// };

import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import {ShoppingCart,House,User} from 'phosphor-react';

const Navbar = () => {
  return (
    <div className='header'> 
     <h1 style={{backgroundColor:'black',color:'white'}}>Shopping Cart</h1> *
    <nav className="nav">
      <ul className="list">
      <li>
          <Link to=""><House size={32} style={{ verticalAlign: 'middle' }}/>Home</Link>
        </li>
        <li>
          <Link to="/login">Log-In</Link>
        </li>
        <li>
          <Link to="/contact"><User size={32} style={{ verticalAlign: 'middle' }}/>Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>  
        </li>
        <li>
          <Link to="/cart"><ShoppingCart size={32}  style={{ verticalAlign: 'middle' }}/>Cart</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;

