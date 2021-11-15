import React from 'react'
import './الملاعب.css' ;
import StarPark from './Starpark';
import Sansero from './Sansiro' ;
import Sentiago from './Sentiago' ;
import Elsherouk from './Elsherouk';
import Reservation from './Reservation';

function الملاعب()  {
   
 
   
 
   
      return(
        <div className="الملاعب">
           <div className="but-container">
              <StarPark/>
              <Sansero/>
              <Sentiago/>
              <Elsherouk/> 
           </div>
          
          <Reservation/> 
          
         
        
        </div>
    
      ) 
}

export default الملاعب ;