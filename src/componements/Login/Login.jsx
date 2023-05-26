import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle, FaGithub } from 'react-icons/fa'


const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    console.log('Login page location: ', location);

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleSineIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            // navigate('/')
            navigate(from, { replace: true });
        })
        .catch( error => console.log(error));
    }
    const handelGithubSineIn =() => {
        signInWithGithub()
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch( error => {
            console.log(error);
        })
    }
    const handelLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);


        // signInUser( email, password)
        signInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const logUser = userCredential.user;
                console.log(logUser);
                //move home page ........................
                navigate('/')
                // navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            });

    }

    return (
        <Container className='w-50 mx-auto mt-4'>
            <h3>Please Login</h3>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
    
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
                <Form.Text className="text-secondary">
                    Don'n have any account?<Link to={"/register"}> Register</Link >
                </Form.Text>
                <br />
                <Button onClick={handelGoogleSineIn} variant="outline-secondary" className='my-2'><span className='mr-2'><FaGoogle></FaGoogle></span> Login With Google</Button>
                <br />
                <Button onClick={handelGithubSineIn} variant="outline-secondary"> <span className='mr-2'><FaGithub></FaGithub></span>Login With GitHub</Button>

            </Form>
        </Container>
    );
};

export default Login;