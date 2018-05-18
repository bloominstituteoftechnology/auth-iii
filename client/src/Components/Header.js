import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
    state = {
        isOpen: false
    }

    toggleNavbar = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    signout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/signin');
    }

    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/" className="text-white">
                        UsersBook
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="/signin">
                            Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="/signup">
                            Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="/" onClick={this.signout}>
                            Log Out
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
};

export default withRouter(Header);
