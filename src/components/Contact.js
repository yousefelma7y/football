import React from 'react' ;
import './Contact.css' ;
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";



export default function Contact()  {
     




    return(
     
      <div className="contact-us">


      
        <form  className="form">
          <div className="form-body">
          <input type='text' name="fname" placeholder='Enter Your Name'  /> <br></br>
           <br></br>
           
          <input type='text' name="email" placeholder='Enter a valid email address '  /><br></br>
          <br></br>
          
           <textarea name="message" 
            rows="10" cols="60" 
            placeholder= 'Enter your message'
            > 
           </textarea><br></br>
           <br></br>
           
           <button type="submit" className="submit"  > Submit </button>
          </div>
         
           
        </form>
        <div className="accounts">
           <h1>
           GET IN TOUCH
           </h1> <br></br>
           <h2 >
           Hey! We are looking forward to start a project with you!
           </h2>
           <br></br>
           <p>
           If you have any questions or queries a member of staff will always be happy to help . feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.   
            </p><br></br>


           <div className="icons"> 
                <a href="https://www.facebook.com/yousef.elmahy.7" target="_blank">
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/yousef_elmahy/" target="_blank">
                    <AiOutlineInstagram/>
                </a>
                <a href="https://twitter.com/YousefElmahy" target="_blank">
                   <AiFillTwitterCircle />
                </a>
                <a href="https://www.youtube.com/channel/UCqGYVqTMGRiCd1MJagVz8Cw" target="_blank">
                    <FaYoutube/>
                </a>
                

           </div>
           <div className="info-section">
            <h3> CALL US </h3>
            <span> +201022361568 </span> <br></br>
            <span> +201011815212 </span>
            <br></br>
            <h3> LOCATION </h3>
            <span> 14 Shoubra Street , El Beheira damanhour </span>
            <br></br>
            <br></br>

            <h3> BUSINESS HOURS </h3>
            <span>Sat – Fri …… 12 am – 12 pm
               </span>

           </div>
        </div>
       
    
        
        
      
          
     </div>
     
    );
}
  

 