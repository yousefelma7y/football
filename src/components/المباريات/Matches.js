import React , {useState} from 'react'
import './Matches.css';


function Matches()  {

    const [san , setSan ]= useState(false) ;
    const [sentiago , setSentiago ]= useState(false) ;
    const [star , setStar ]= useState(false) ;
    const [elshrouk , setElshrouk ]= useState(false) ;

    return(
    <div className="matches">
          <div className="container">
             <button onClick={ ()=>setSan(!san) & setSentiago(false) & setStar(false) & setElshrouk(false)    }   className="court-butt">
              san siro
              </button>

              <button onClick={ ()=>setSentiago(!sentiago) & setSan(false) & setStar(false) & setElshrouk(false)      }  className="court-butt" >
              Sentiago
              </button>

              <button onClick= {()=> setStar(!star)  & setSentiago(false) & setSan(false) & setElshrouk(false)     }   className="court-butt" >
                Star Park
              </button>
              
              <button onClick={ ()=>setElshrouk(!elshrouk)  & setSentiago(false) & setStar(false) & setSan(false)     }   className="court-butt">
              Elsherouk
              </button>



           {
               san?   <div className="tournament-matches">
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group A
                     </span>
                     <span className="date">
                       13/10/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs">X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group B
                     </span>
                     <span className="date">
                       14/10/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group C
                     </span>
                     <span className="date">
                       15/10/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group D
                     </span>
                     <span className="date">
                       16/10/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                 
               </div> :null
           } 
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
           {

            sentiago?   <div className="tournament-matches">
                        {/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group A
                     </span>
                     <span className="date">
                       13/11/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group B
                     </span>
                     <span className="date">
                       14/11/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group C
                     </span>
                     <span className="date">
                       15/11/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group D
                     </span>
                     <span className="date">
                       16/11/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                        </div> :null

            }
 {/* ---------------------------------------------------------------------------- */}
 {/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
            {
                star?   <div className="tournament-matches">
               {/* ---------------------------------------------------------------------------- */}
               <div className="head">
                     <span className="title">
                       Group A
                     </span>
                     <span className="date">
                       13/12/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group B
                     </span>
                     <span className="date">
                       14/12/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group C
                     </span>
                     <span className="date">
                       15/12/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group D
                     </span>
                     <span className="date">
                       16/12/2021
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
            </div> :null

            }
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------- */}
            { 
            elshrouk?   <div className="tournament-matches">
            {/* ---------------------------------------------------------------------------- */}
            <div className="head">
                     <span className="title">
                       Group A
                     </span>
                     <span className="date">
                       13/1/2022
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group B
                     </span>
                     <span className="date">
                     14/1/2022
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group C
                     </span>
                     <span className="date">
                     15/1/2022
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
                   <div className="head">
                     <span className="title">
                       Group D
                     </span>
                     <span className="date">
                     16/1/2022
                     </span>
                   </div>
{/* ---------------------------------------------------------------------------- */}
<button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       12:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                       First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Third Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       1:30 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Second Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       2:15 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     First Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Fourth Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:00 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                  <button className="matchDay"> 
                     <span className="Home-team">
                     Third Team
                    </span>
                    <span className="vs"> X </span>
                    <span className="Away-team"> 
                    Second Team
                    </span>
                   
                   <hr /> 
                   
              
                     <span className="match-time">
                       3:45 pm
                     </span>
                     <span className="match-referee">
                       ابراهيم نور الدين
                     </span> 
                  </button>

                 
                  
{/* ---------------------------------------------------------------------------- */}
            </div> :null
            }



          </div>
           





           
      
    </div>

    );
}
  export default Matches ;