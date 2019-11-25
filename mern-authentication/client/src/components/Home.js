import React, {Component} from 'react';

class Home extends Component{

render(){
  return (
    <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
      <h4>I am home :)</h4>
      <div className="row">
        <a className="waves-effect blue darken-4 btn" href="/auth/google">Sign Up with Google</a>
      </div>
    </div>

  );
}

}

export default Home;
