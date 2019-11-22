import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component{
  state={
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:''
  }

  //proceed to next step
  nextStep=()=>{
    const {step} =this.state;
    this.setState({
      step:step+1
    });
  }
  //proceed to previous step
  prevStep=()=>{
    const {step} =this.state;
    this.setState({
      step:step-1
    });
  }

//handle field change
handleChange=input=>e=>{
  this.setState({[input]:e.target.value});
}

  render(){
    const {step}=this.state;
    const {firstName,lastName,email,occupation,city,bio}=this.state;
    const values={firstName,lastName,email,occupation,city,bio};

    switch(step){
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>Form personal Details</h1>
      case 3:
        return <h1>Confirm</h1>
      case 4:
        return <h1>Success</h1>
    }

    return (
      <div>

      </div>
    )
  }
}

export default UserForm;
