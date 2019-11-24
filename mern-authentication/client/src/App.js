import React,{Component,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

//    <NavBar />

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <h6> WaterHut </h6>
      </BrowserRouter>
    );
  }
}

export default App;
