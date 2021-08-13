import React , {useState} from 'react'
import Reservation from './Reservation';
import './البطولات.css' ;

function StarPark(){


    const [star , setStar ]= useState(false) ;


    return( 
        <>
              <button onClick= {()=> setStar(!star)     }   className="tournament-name" >
                Star Park
              </button>
     
     
          
      {
              star?  
              <div className="tournament"> 
    
              <table className="group-a" >
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

    


    

    
    
}export default StarPark ;