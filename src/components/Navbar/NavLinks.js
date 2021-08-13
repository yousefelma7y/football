import React , {useEffect} from 'react'
import { NavLink  } from 'react-router-dom';
import {motion} from 'framer-motion';
import { GiTrophyCup } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
import './Navbar.css';

const NavLinks =(props) =>{

    const animateFrom = {opacity : 0 , y :-40}
    const animateto = {opacity : 1 , y :1}

    
    return(


    <div className="navlinks">
       <ul >
  
               <motion.li 
                initial ={animateFrom}
                animate={animateto}
                transition={{delay:0.30}}
                className="nav-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink className="nav-link" to="/" exact>
                      <AiFillProfile/>   الملاعب
                         
                    </NavLink> 
                   </motion.li>
  
               <motion.li
                 initial ={animateFrom}
                 animate={animateto}
                 transition={{delay:0.05}}
               className="nav-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <NavLink className="nav-link" data-offset="100" to="/البطولات" exact >
                    < GiTrophyCup /> البطولات
                  </NavLink>
                </motion.li>
    
                <motion.li
                initial ={animateFrom}
                animate={animateto}
                transition={{delay:0.10}}
                 className="nav-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <NavLink className="nav-link" to="/Matches" exact>
                  <FaClipboardList/> المباريات
                  </NavLink> 
                </motion.li>
  
                
  
                <motion.li 
                initial ={animateFrom}
                animate={animateto}
                transition={{delay:0.20}}
                className="nav-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <NavLink className="nav-link" to="/الأحصائيات" exact>
                  <IoBarChartSharp/> الأحصائيات
                  </NavLink> 
                </motion.li>

                
               
                
                <motion.li 
                initial ={animateFrom}
                animate={animateto}
                transition={{delay:0.40}}
                className="nav-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <NavLink className="nav-link"  to="/contact" exact>
                  <RiContactsBookFill/> Contact Us
                  </NavLink>
                </motion.li>
            </ul>
        </div>
       
     ) ;
}

export default NavLinks ;