import { Button, Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);
const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
    })
    .catch((error) => {
        console.error('error', error);
    })

}

    return (
        <div className='w-50 mx-auto'>
            <h1>This is register</h1>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Register;