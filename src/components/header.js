import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const headerStyle = {
  color: 'white',
};

class Header extends Component {
    render() {
        return <Navbar style={headerStyle} expand="md" dark color="dark" className="header">
            <NavbarBrand to="/">The Weather</NavbarBrand>
        </Navbar>
    }
}

export default Header;
