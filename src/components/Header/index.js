import React from 'react';
import { Menu, Image, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/images.png';

const Header = () => {
    return (
        <Menu secondary style={{margin:'7px'}} pointing>
            <Image as={Link} to="/" src={logo} width={200}/>
            <Menu.Item position="right">
                <Button as={Link} to="/contacts/create" primary basic Icon>
                    <Icon name="add"></Icon>
                    Create Contact
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button color="red" basic Icon style={{}}>
                    <Icon name="log out"></Icon>
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    )
}

export default Header;
