import React, {Component} from 'react';

class Header extends Component{

render(){
  return (
    <nav>
    <div className="nav-wrapper blue darken-4">
      <a href="/" className="brand-logo">WaterHut</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/auth/google">Sign Up</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/auth/logout">Logout</a></li>
      </ul>
    </div>
  </nav>
  );
}

}

export default Header;
