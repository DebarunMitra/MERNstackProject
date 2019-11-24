import React, {Component} from 'react';

class Home extends Component{

render(){
  return (
    <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
      <h4>I am home :)</h4>
      <div className>
        <a class="waves-effect blue darken-4 btn">Sign Up with Google</a>
      </div>
    </div>

  );
}

}

export default Home;
