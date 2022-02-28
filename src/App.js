
import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Api from './components/Api';
import Love from './components/Love';
import Funny from './components/Funny';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App(){

  
  
 


return(
  <>
  <Router>
    <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Api" component={Api} />
    <Route exact path='/Love' component={Love} />
    <Route exavt path='/Funny' component={Funny} />


    
  </Switch>
  </Router>
  </>
)
}



export default App;
