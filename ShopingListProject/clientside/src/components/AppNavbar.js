import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
    //this.toggle=this.toggle.bind(this);//way to include custom method to constructor OR wo can use Arrow function also
    state={
      isOpen:false
    }
    toggle=()=>{
      this.state({
        isOpen:!this.state.isOpen
      });
    }

    render(){
      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href="#">ShopingList</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav  className="ml-auto">
                      <NavItem>
                        <NavLink href="https://github.com/debarunmitra">GitHub</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
}

export default AppNavbar;
