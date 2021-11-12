import React from 'react';
import { Menu, Image, Button, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/images.png';

const Header = () => {
    const { pathname } = useLocation();
    console.log('location', pathname)
    return (
        <Menu secondary style={{ margin: '7px' }} pointing>
            <Image as={Link} to="/" src={logo} width={200} />
            {pathname === '/' && (
                <Menu.Item position="right">
                    <Button as={Link} to="/contacts/create" primary basic Icon>
                        <Icon name="add"></Icon>
                        Create Contact
                    </Button>
                </Menu.Item>
            )}
            {pathname === '/' && (
                <Menu.Item>
                    <Button color="red" basic Icon style={{}}>
                        <Icon name="log out"></Icon>
                        Logout
                    </Button>
                </Menu.Item>
            )}
        </Menu>
    )
}

export default Header;
