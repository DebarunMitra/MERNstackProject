import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Header extends Component{

render(){
  const rederContect = ()=>{
    switch(this.props.user){
            case null:
              return (
                <React.Fragment>
                  <li><a href="/auth/verify">Loading</a></li>
                  <li><a href="/auth/google">Sign Up</a></li>
                </React.Fragment>
          );
            case false:
                return  <li><a href="/auth/google">Sign Up</a></li>
            default:
                 return(
                     <React.Fragment>
                       <li><a href="/auth/logout">Logout</a></li>
                       <li><Link to="/profile">Profile</Link></li>
                       <li><Link to="/about">About</Link></li>
                     </React.Fragment>
                 )
        }
  };

  return (
          <nav>
             <div className="nav-wrapper deep-purple darken-2">
             <Link to={this.props.user ? '/profile' : '/'} className="brand-logo">WaterHut</Link>
             <ul id="nav-mobile" className="right">
                {rederContect()}
             </ul>
             </div>
         </nav>
  );
}

}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps)(Header);
