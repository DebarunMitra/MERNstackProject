import React, {
  Component
} from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "jquery/dist/jquery.min.js";
//import NavBar from './components/AppNavBar/NavBar';
//import Login from './components/LoginInterface/Login';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';

//    <NavBar />

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" />
        <h6> WaterHut </h6>
      </BrowserRouter>
    );
  }
}

export default App;
