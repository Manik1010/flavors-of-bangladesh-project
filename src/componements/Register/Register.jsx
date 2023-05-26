import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';



const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    // console.log(user.displayName)

    const handelRegister = (e) => {
        e.preventDefault();

        const frm = e.target;
        const name = frm.name.value;
        const email = frm.email.value;
        const url = frm.photo.value;
        const pass = frm.pass.value;
        // console.log(email, url, pass, name)

        setError('');
        if (pass.length < 6) {
            setError('Password must be 6 characters or longer')
            return
         }
        //else{
        //     setError('Password must be 6 characters or longer')
        //     return;
        // }

        createUser(email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }


    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
                <Button variant="primary" type="submit" >
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Alreadt have an account?<Link to={"/login"}> Login</Link >
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};
export default Register;