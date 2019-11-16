import React, { Component} from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


class ShopingList extends Component{

componentDidMount(){
  this.props.getItems();
}



  render(){
    const { items } = this.props.item;
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
            {items.map(({id,name})=>(
              <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                  <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={()=>{
                    this.setState(state=>({
                      items:state.items.filter(item=>item.id!==action.payload
                    }))
                  }}>&times;</Button>{name}
                  </ListGroupItem>
              </CSSTransition>
            ))}
            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
}


ShopingList.propTypes={
  getItems:PropTypes.func.isRequired,
  item:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  item:state.item
});
export default connect(mapStateToProps,{getItems,deleteItem})(ShopingList);
