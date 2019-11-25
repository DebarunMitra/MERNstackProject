import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import {connect} from 'react-redux';
import {fetchUserAction} from './actions/myactions';
//    <NavBar />

class App extends Component {

  componentDidMount() {
    this.props.fetch_user();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <h6> WaterHut </h6>
      </BrowserRouter>
    );
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  };
}

export default connect(null,mapDispathToProps)(App);
