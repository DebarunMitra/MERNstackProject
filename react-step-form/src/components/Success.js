import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component{
  continue = e=>{
    e.preventDefault();
    //process from data, like api call to send date
    this.props.nextStep();
  }

  back = e=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render (){
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank You for your submission</h1>
            <p>We will get you soon via email</p>
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;
