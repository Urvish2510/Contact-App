import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const RegisterContainer = () => {
    return (
        <div>
            
            <h1>Register</h1>
            <Link to = "/auth/login">Login</Link>

        </div>
    )
}

export default RegisterContainer;
