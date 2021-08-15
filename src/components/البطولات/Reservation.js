import React , {useState}  from 'react'
import './البطولات.css' ;



function Reservation()  {
   
 
    const [reservation , setReserve ]= useState(false) ;
 
   
      return(
        <div className="tour-container">

        
        <div className="tournament-reservation">
         
         <h3  className="tournament-reservation-header"  >
         تسجيل الفرق 
         </h3>

          <form className="tournament-form"> 
          <label >Your Team Name : </label> <br></br>
                <input  type="text" name="name"  className="reserv"/>

                <br></br>

                <label> Your Number :  </label> <br></br>
                <input  type="text" name="Number" className="reserv" />
                <br></br>
                <label> Your Team :  </label> <br></br> <br></br>
                <textarea name="message" 
                  rows="10" cols="60" 
                  placeholder= 'Enter your message'
                  className="reserv-area"
                  > 
                </textarea>
                <p className="warning"> *علي الاقل 7 لاعبين*</p>
                <br></br><br></br>

          <input type="submit" value="Submit" className="tournament-submitt" />
          </form>
          
        
        
        </div>
    </div>
      ) 
}

export default Reservation ;