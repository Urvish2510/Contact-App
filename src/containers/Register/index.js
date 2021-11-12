import React, { useEffect } from 'react';
import RegisterUI from '../../layouts/Register';
import useForm from './useForm';

const RegisterContainer = () => {
    useEffect(() => {
    }, []);

    return <RegisterUI form={useForm()} />;
}

export default RegisterContainer;