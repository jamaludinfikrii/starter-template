import React,  { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderKu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
      };
    }
    toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
    }

    render(){ 
            return(
                <div style={{marginBottom:"75px"}}>
                    <Navbar color="light" light expand="md" fixed="top">
                        <NavbarBrand className="ml-2" ><Link to='/'> Auth App </Link> </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Daftar</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Masuk</NavLink></Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        }
}



export default HeaderKu;