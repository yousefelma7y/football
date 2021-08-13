import React , {useState} from 'react'
import './البطولات' ;
import Reservation from './Reservation';

function Elsherouk(){


    const [elshrouk , setElshrouk ]= useState(false) ;


    return( 
        <>
              <button onClick={ ()=>setElshrouk(!elshrouk)     }   className="tournament-name">
              Elsherouk
              </button>
     
     
          
      {
              elshrouk?   
              
              <div className="tournament"> 
    
                <table className="group-a">
                  <thead>
                    <tr>
                      <th>#</th> 
                      <th> A </th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>First Team</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Second Team</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Third Team</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Fourth Team</td>
                    </tr>
                  </tbody>
                  
                </table>

                <table  className="group-b">
                  <thead>
                    <tr>
                      <th>#</th> 
                      <th> B</th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>First Team</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Second Team</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Third Team</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Fourth Team</td>
                    </tr>
                  </tbody>
                </table> 

                <table  className="group-c">
                  <thead>
                    <tr>
                      <th>#</th> 
                      <th> C </th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>First Team</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Second Team</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Third Team</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Fourth Team</td>
                    </tr>
                  </tbody>
                </table>

                <table  className="group-d">
                  <thead>
                    <tr>
                      <th>#</th> 
                      <th> D </th>
                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>First Team</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Second Team</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Third Team</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Fourth Team</td>
                    </tr>
                  </tbody>
                </table>


                <Reservation/>
              </div>

           :null
          }
          
      </>

      
      
    )

    


    

    
    
}export default Elsherouk ;