import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About.js"
import Home from "../Home.js"
import Skills from "../Skills.js"
import Engineering from "../Engineering.js"
import Projects from "../Projects.js"
import Navbar from './Navbar.js'
// import Insta from "../Insta/Insta.js";

export default function Routes(){
    
        return(
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" ><Home/> </Route>                    
                    <Route path="/About" component={About} />                  
                    <Route path="/Skills" component={Skills} />                  
                    <Route path="/Engineering" component={Engineering} />                  
                    <Route path="/Projects" component={Projects} />                                      
                    {/* <Route path="/Insta" component={Insta} /> */}
                </Switch>
            </Router>
        )
    
}