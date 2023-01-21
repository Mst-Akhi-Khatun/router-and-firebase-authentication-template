import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../contexts/UserContext';


const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    // useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true})
        })
        .catch((error) => {
            console.error('error', error);
            setError(error.massage);
        })
    
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>{error}</p>
        </div>
    );
};

export default Login;