import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home';




function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
       <Route path="/">
         <Home/>
       </Route>
       

    </Switch>

       <section>
         <img src='/slack.png' alt='slack logo'/>  <img src='/git.png' alt='git logo'/> 
         <hr width='70%'/>
       </section>
       
       <footer>
       
         <div className="footer-first">
         <img src='/Zuri.Internship_Logo.png' alt='zuri.internship'/>
         </div>
         <div className="footer-middle">
           <h4> HNG Intership 9 Frontend Task </h4>
         </div>
         <div className="footer-last">
         <img src='/ifg.png' alt='ingressive for good'/>
         </div>
       </footer>
    </div>
    </Router>
  );
}

export default App;
