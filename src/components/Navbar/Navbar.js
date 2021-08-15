import React , {useEffect} from 'react'
import './Navbar.css';
import MobileNavbar from './MobileNavbar';
import Navigation from './Navigation';
import { FaFutbol } from "react-icons/fa";


function Navbar() {
  return (

      <div className='navbar'>
          <button className="navbar-brand-navbar-logo" >
              Damanhour Football <FaFutbol/> 
          </button>
         <Navigation/>
        <MobileNavbar/>
        
       </div>
    
    );
}

export default Navbar;
