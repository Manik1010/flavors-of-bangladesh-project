import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, Form, Navbar, Nav, NavLink } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart, FaCookie, FaGoogle, FaPhone, FaEnvelope } from 'react-icons/fa'

import b1 from '../../assets/download (4).jpg';
import b2 from '../../assets/download (1).jpg';
import b3 from '../../assets/download (2).jpg';
import banerRight from '../../assets/1615719572.jpg'
import contact from '../../assets/bl.png'
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { useLoaderData } from 'react-router-dom';
import Allchefs from '../Chefs/Allchefs/Allchefs';


const Home = () => {
    const chefsData = useLoaderData();
    // const {user,loading} = useContext(AuthContext);
    // const { name, id } = chefsData;
    console.log(chefsData);

    return (

        <Container>
            {/* Gallery Section here use a slide  .........................*/}
            <div className='container border my-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Carousel className='p-4'>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block"
                                    src={b1}
                                    alt="First slide"
                                    style={{ height: '400px', width: '1200px' }}
                                />
                                <Carousel.Caption>
                                    <h3>Baisakhin Food: Panta Bhat & Hilsha fish</h3>
                                    <p> It is a traditional dish made by soaking leftover rice in water overnight and then serving it with fried fish, pickles,
                                        and lentil fritters. It is a popular breakfast item during the Baisakh festival.Hilsha is a popular fish in Bangladesh and is considered a delicacy during the Baisakh festival.
                                        It is usually cooked in a mustard-based gravy or steamed and served with rice.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block"
                                    src={b2}
                                    alt="Second slide"
                                    style={{ height: '400px', width: '1200px' }}
                                />
                                <Carousel.Caption>
                                    <h3>Tridational Food: Aloo Posto</h3>
                                    <p>It is a vegetarian dish made with potatoes and poppy seeds paste.
                                        It is a staple in Bengali cuisine and is commonly served during the Baisakh festival.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block"
                                    src={b3}
                                    alt="Third slide"
                                    style={{ height: '400px', width: '1200px' }}
                                />
                                <Carousel.Caption>
                                    <h3>Tridational Food in BD</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* A section here discribe my project few word ............. */}
            <div className="container ml-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-div p-4 ml-4">
                            <h4>Hello there! I am from Bangladesh. Start cooking with me and <span className='font-italic fw-bold text-decoration-underline'>flavour BD Foods</span></h4>
                            <p>The project <span className='fw-bold fst-italic'>Flavors of Bangladesh</span> could refer to a website, blog,
                                or social media platform dedicated to showcasing the diverse and delicious cuisine
                                of Bangladesh. The project could feature recipes, cooking techniques, and cultural stories related to Bangladeshi food.
                                It could also include content related to the history and traditions behind the dishes, as well as
                                information on the ingredients used in Bangladeshi cooking. The goal of the project would be to promote and celebrate
                                the unique and vibrant food culture of Bangladesh and to share it with a wider audience....</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="right-div ml-4">
                            <img
                                className="d-block"
                                src={banerRight}
                                alt="First slide"
                                style={{ height: '350px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* All chefs Section ....................................... */}
            <div className="container">
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
                    {
                        chefsData.map(data => <Allchefs
                            key={data.id}
                            alllData={data}
                        ></Allchefs>)}
                </div>

            </div>
            {/* 

            {/* Contact Section ............................... */}
            <Container fluid>
                <div className='row p-4'>
                    {/* <img style={{ background: `url(${banerRight})`, backgroundSize: 'cover', height: '100vh' }} src={banerRight} alt="" /> */}
                    <div className='cols col-sm-4'>
                        <Row>
                            <Col>
                                <img src={contact} alt="Banner" className="w-100" style={{ height: '600px', position: 'center', backgroundSize: 'cover' }} />
                            </Col>
                        </Row>
                    </div>
                    <div className='cols col-sm-7'>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={8} lg={6}>
                                <h1 className='text-center'>Contact Us</h1>
                                <p className='text-center'>Feel free to reach out to us with any questions or comments. We're here to help!</p>
                                <div className="mb-3">
                                    <FaEnvelope className="mr-2 ml-2" />
                                    <a href="mailto:contact@example.com">contact@example.com</a>
                                </div>
                                <div className="mb-3">
                                    <FaPhone className="mr-2 ml-2" />
                                    <a href="tel:+1234567890">123-456-7890</a>
                                </div>
                                <div className="mb-3" >
                                    <FaGoogle className="mr-2 ml-2" />
                                    <a href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA">Visit us on Google Maps</a>
                                </div>
                                <Form>
                                    <Form.Group controlId="formName" className='my-2'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage" className='my-2'>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Home;