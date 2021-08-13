import React , {useState} from 'react'
import './الملاعب.css' ;

function StarPark(){


    const [star , setStar ]= useState(false) ;


    return( 
        <>
              <button onClick= {()=> setStar(!star)     }   className="court-name" >
                Star Park
              </button>
     
     
          
      {
              star?  
              <div className="star-table">
                    <table >
                        <thead>
                           <tr>
                             <th>#</th>
                             <th>12 pm</th>
                             <th>1 pm</th>
                            <th>2 pm</th>
                              <th>3 pm</th>
                            <th>4 pm</th>
                               <th>5 pm</th>
                              <th>6 pm</th>
                             <th>7 pm</th>
                            <th>8 pm</th>
                               <th>9 pm</th>
                               <th>10 pm</th>
                               <th>11 pm</th>
                             <th>12 am</th>
                              <th>1 am</th>
                               <th>2 am</th>
                               <th>3 am</th>
                            <th>4 am</th>
                               <th>5 am</th>
                               <th>6 am</th>
                              <th>7 am</th>
                              <th>8 am</th>
                               <th>9 am</th>
                              <th>10 am</th>
                              <th>11 am</th>
                             </tr>
                           </thead>
                          <tbody>
                             <tr>
                               <td>1/8</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             </tr>
                            <tr>
                              <td>2/8</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                              
                             </tr>
                           <tr>
                              <td>3/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>
                             <tr>
                              <td>4/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>
                             <tr>
                              <td>5/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>
                             <tr>
                              <td>6/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>
                             <tr>
                              <td>7/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>

                             <tr>
                              <td>8/8</td>
                               <td ></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                             
                             </tr>
                           </tbody>
                         </table>
               
              </div>
              

           :null
          }
          
      </>

      
      
    )

    


    

    
    
}export default StarPark ;