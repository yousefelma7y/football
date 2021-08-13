import React , {Component} from 'react'
import './البطولات.css' ;
import StarPark from './Starpark';
import Sansero from './Sansiro' ;
import Sentiago from './Sentiago' ;
import Elsherouk from './Elsherouk';



function البطولات()  {

      return(
        <div className="homepage">
          
          <StarPark/>
          <Sansero/>
          <Sentiago/>
          <Elsherouk/> 
        
          
        </div>
      
      )
    
  
}

export default البطولات ;