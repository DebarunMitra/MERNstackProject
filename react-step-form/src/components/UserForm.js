import React, {component} from 'react';

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
      step:step+1;
    });
  }
  //proceed to previous step
  prevStep=()=>{
    const {step} =this.state;
    this.setState({
      step:step-1;
    });
  }


  render(){
    return (
      <div>

      </div>
    )
  }
}

export default UserForm;
