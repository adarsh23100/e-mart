import './App.css';
import Header from "./component/layout/Header"
import {BrowserRouter as Router} from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';

React.useEffect(() => {
  WebFont.load({
    google:{
      families:["Roboto","Droid Sans","Chilanka"]
    }
  })
},[])

function App() {
  return (
    <Router> 
      <Header />
    </Router>
  );
}

export default App;
