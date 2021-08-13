import React from 'react' ;
import {useState} from 'react' ;
import './Navbar.css';
import {CgMenuRound} from 'react-icons/cg' ;
import {CgCloseO} from 'react-icons/cg' ;
import NavLinks from './NavLinks';


const MobileNavbar =() => {

    const [open, setOpen] = useState(false);
    
    const hamburgerIcon = <CgMenuRound className="hamburger" 
            size='40px' color='white'  
            onClick={()=>setOpen(!open) } />

    const closeIcon = <CgCloseO className="hamburger" 
            size='40px' color='white'
            onClick={()=>setOpen(!open) } />       

   const closeMobileMenu = () => setOpen(false) ;

   
   return (
    <nav className="MopileNav">
        
      {open ? closeIcon : hamburgerIcon }
             
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
     </nav> 
   
   );
}

export default MobileNavbar ;