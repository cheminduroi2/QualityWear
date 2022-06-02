import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css'

const Navigation = () => {

    const iconStyle = { fontSize: '27px', marginLeft: '20px', marginRight: '20px' };
    const navIcons = ['user', 'shopping-bag', 'envelope'].map(
        (iconName, i) => <Nav.Link href="" key={i}><FontAwesomeIcon icon={iconName} style={iconStyle} /></Nav.Link>
    );

    return (
        <Navbar bg="transparent" className="nav-div" fixed="top" variant="dark">
            <Nav className="ml-auto">
                {navIcons}
            </Nav>
        </Navbar>
    );
}

export default Navigation;