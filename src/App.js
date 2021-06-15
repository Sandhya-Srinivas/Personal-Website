import React from "react";
import {Router} from "react-router-dom";
import Routes from './Components/Redirect/Routes';
import history from './Components/History'
import './index.css'

function App() {
  return(
    <body>
      <div class='contents'>
      <Router history={history} >
        <Routes />
      </Router>
      </div>
    </body>
  );
}

export default App;
