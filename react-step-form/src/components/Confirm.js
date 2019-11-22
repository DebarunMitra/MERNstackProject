import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List,ListItem} from 'material-ui/List';


export class FormPersonalDetails extends Component{
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
    const {values:{firstName,lastName,email,occupation,city,bio}}=this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm Your Details" />
              <List>
                <ListItem
                  primaryText="First Name"
                  secondaryText={firstName}
                 />
                 <ListItem
                   primaryText="Last Name"
                   secondaryText={lastName}
                  />
                  <ListItem
                    primaryText="Email"
                    secondaryText={email}
                   />
                   <ListItem
                     primaryText="City Name"
                     secondaryText={city}
                    />
                    <ListItem
                      primaryText="Occupation"
                      secondaryText={occupation}
                     />
                     <ListItem
                       primaryText="Bio"
                       secondaryText={bio}
                      />
              </List>
               <br/>
               <RaisedButton
                  label="Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
                />
               <RaisedButton
                  label="Confirm & Continue"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                />
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles={
  button:{
    margin:15
  }
}

export default FormPersonalDetails;
