import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import البطولات from './components/البطولات/البطولات' ;
import Matches from "./components/المباريات/Matches";
import Contact from "./components/Contact";
import Navbar from './components/Navbar/Navbar';
import الملاعب from './components/الملاعب/الملاعب' ;
import الأحصائيات from './components/الأحصائيات' ;

function App() {
  return (
     
     <> 
        <Router>
          <Navbar/>
            <div className="pages">
              <Switch>

                <Route path="/" exact> <الملاعب/> </Route>

                <Route path="/البطولات" exact> <البطولات/> </Route>

                <Route path="/Matches" exact> <Matches/> </Route>

                <Route path="/الأحصائيات" exact> <الأحصائيات/> </Route>
                
                    
                <Route path="/Contact" exact> <Contact/>  </Route>
                  

                <Redirect to="/" />
                
              </Switch>
           </div>
        </Router>

    </>
  );
}

export default App;
