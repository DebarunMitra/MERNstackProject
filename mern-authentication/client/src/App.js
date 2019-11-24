import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
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
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <h6> WaterHut </h6>
      </BrowserRouter>
    );
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null,mapDispathToProps)(App);
