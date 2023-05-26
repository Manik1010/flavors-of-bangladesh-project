import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext((AuthContext))
    // console.log(user.displayName);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* <Navbar collapseOnSelect expand="lg" > */}
                <Container>
                    <Navbar.Brand href="#home" className='text-lowercase'> Flavors of Bangladesh</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className={({ isActive }) => isActive ? 'blue-300' : 'default'}>
                                <Link to="/" style={{ textDecoration: 'none' }}><span className='text-light'>Home</span></Link>
                            </Nav.Link>
                            <Nav.Link className={({ isActive }) => isActive ? 'blue-300' : 'default'}>
                                <Link to="/about" style={{ textDecoration: 'none' }}>
                                    <span className='text-light'>About</span></Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/blog" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')} style={{ textDecoration: 'none' }}><span className='text-light'>Blog</span></Link>
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            {user &&
                                <>
                                    {/* <Nav.Link><FaRegUserCircle style={{ fontSize: '2rem' }}></FaRegUserCircle>Profile</Nav.Link>
                                     */}

                                    <img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" />
                                </>
                            }

                            {user ?
                                <Link to="/login"><Button onClick={handleLogout} variant="secondary">LogOut</Button></Link> :
                                // <Button to="/login" variant="secondary">Login</Button>
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;