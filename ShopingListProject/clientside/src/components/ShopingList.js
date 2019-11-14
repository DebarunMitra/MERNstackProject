import React, { Component} from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShopingList extends Component{
  state={
    items:[
      {id:uuid(), name:'Egg'},
      {id:uuid(), name:'Milk'},
      {id:uuid(), name:'Bread'},
      {id:uuid(), name:'Jam'},
    ]
  }

  render(){
    return (
      <Container>
        <Button color="dark"
          style={{marginBottom:'2rem'}}
          onClick={()=>{
            const name=prompt('Enter Item');
            if(name){
              this.setState(state=>({
                items:[...state.items,{id:uuid(),name:name}]
              }));
            }
          }}>Add Items</Button>
          <ListGroup>
            <TransitionGroup className="shoping list">
            {items}
            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
}

export default ShopingList;
