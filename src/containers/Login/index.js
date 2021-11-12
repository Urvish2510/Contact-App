import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Provider';

const LoginContainer = () => {

    const {
        authDispatch,
        authState: {
            auth: { loading, data, error }
        },
    } = useContext(GlobalContext);

        console.log("data", data);
    return (
        <div>

            <h1>{data ? `Welcome ${data?.username}` : "Login Here"}Login</h1>
            <Link to="/auth/register">Register</Link>

        </div>
    )
}

export default LoginContainer;
