import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Default from "./Pages/Default";
import Recipe from "./Pages/Recipe";
import SingleRecipe from "./Pages/SingleRecipe";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar></Navbar>
      <Switch>
       <Route path="/" exact component = {Home}></Route>
       <Route path="/recipes" exact component = {Recipe}></Route>
       <Route path="/recipes/:id" component = {SingleRecipe}></Route>
       <Route component = {Default}></Route>
    
     </Switch>


      </main>
      
    </Router>
   
   
  );
}

export default App;
