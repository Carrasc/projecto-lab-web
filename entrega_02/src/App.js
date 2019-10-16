import React from 'react';
import './App.css';
import Home from './views/Home';
import VideoClass from './views/VideoClass';
import Dashboard from './views/Dashboard';
import Footer from './components/Footer';

//import Example from './components/Example'

import { BrowserRouter, Route, Link } from "react-router-dom";
//import GoogleFontLoader from 'react-google-font-loader';

import global from './styles/global.js';
import { height, fontFamily } from '@material-ui/system';




function App(props) {
  
  

  return (
    //<Example/>

    <BrowserRouter>
      <div style={{fontFamily:'Nunito'}}>
        <Link to="/"></Link>
        <Link to="/video_class"></Link>
        <Link to="/dashboard"></Link>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/video_class" component={VideoClass} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
      
 
  );
}

export default App;
