import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";
import { Card, Container, ListGroup } from 'react-bootstrap';

const Blog = () => {
    const conponentPDF = useRef();


    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Userdata",
        onAfterPrint: () => alert("Data saved in PDF")
    });

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div ref={conponentPDF} style={{ width: '100%' }}>
                            <Container>
                                <h1 className='my-4 font-bold text-center'>There are some Answers and Querstions</h1>
                                <Card>
                                    <Card.Body className='text-center'>
                                        <Card.Title>How to validate React props using PropTypes?</Card.Title>
                                        <Card.Text>
                                            PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype.
                                            This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='my-4'>
                                    <Card.Body className='text-center'>
                                        <Card.Title>What is differences between uncontrolled and controlled components?</Card.Title>
                                        <Card.Text>
                                            The main difference between controlled and uncontrolled components is the way their state is managed. In a controlled component,
                                            the component's state is the "single source of truth" for the form data, and any updates to the form data are reflected immediately
                                            in the component's state. This makes it easy to validate and manipulate the form data, and to implement features like form reset and submission.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body >
                                        <Card.Title className='text-center'>What is the difference between nodejs and express js?</Card.Title>
                                        <Card.Text>
                                            Here are some key differences between Node.js and Express.js:
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Node.js is a runtime environment that provides a platform for running
                                                    JavaScript code outside of the browser, while Express.js is a web framework built on top of Node.js.</ListGroup.Item>
                                                <ListGroup.Item as="li">Node.js provides low-level APIs for working with network and file system,
                                                    while Express.js provides high-level APIs for building web applications and APIs.</ListGroup.Item>
                                                <ListGroup.Item as="li">Express.js provides middleware, which is a way to add functionality to your application's
                                                    request/response cycle, while Node.js does not have middleware built-in.</ListGroup.Item>
                                                <ListGroup.Item as="li">Express.js has a simpler syntax and is easier to use for building web applications, while Node.js requires more knowledge of low-level APIs</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='my-4'>
                                    <Card.Body className='text-center'>
                                        <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                                        <Card.Text>
                                            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract,
                                            either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                                            <br />
                                            The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic
                                            (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                        <div className="d-grid d-md-flex justify-content-md-end mb-3">
                            <button className="btn btn-success" onClick={generatePDF}>PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Blog;



// import React from 'react';
// import { Card, Container, ListGroup } from 'react-bootstrap';

// const Blog = () => {
//     return (
//         <Container>
//             <h1 className='my-4 font-bold text-center'>There are some Answers and Querstions</h1>
//             <Card>
//                 <Card.Body className='text-center'>
//                     <Card.Title>How to validate React props using PropTypes?</Card.Title>
//                     <Card.Text>
//                         PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype.
//                         This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card className='my-4'>
//                 <Card.Body className='text-center'>
//                     <Card.Title>What is differences between uncontrolled and controlled components?</Card.Title>
//                     <Card.Text>
//                         The main difference between controlled and uncontrolled components is the way their state is managed. In a controlled component,
//                         the component's state is the "single source of truth" for the form data, and any updates to the form data are reflected immediately
//                         in the component's state. This makes it easy to validate and manipulate the form data, and to implement features like form reset and submission.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card>
//                 <Card.Body >
//                     <Card.Title className='text-center'>What is the difference between nodejs and express js?</Card.Title>
//                     <Card.Text>
//                         Here are some key differences between Node.js and Express.js:
//                         <ListGroup as="ol" numbered>
//                             <ListGroup.Item as="li">Node.js is a runtime environment that provides a platform for running
//                                 JavaScript code outside of the browser, while Express.js is a web framework built on top of Node.js.</ListGroup.Item>
//                             <ListGroup.Item as="li">Node.js provides low-level APIs for working with network and file system,
//                                 while Express.js provides high-level APIs for building web applications and APIs.</ListGroup.Item>
//                             <ListGroup.Item as="li">Express.js provides middleware, which is a way to add functionality to your application's
//                                 request/response cycle, while Node.js does not have middleware built-in.</ListGroup.Item>
//                             <ListGroup.Item as="li">Express.js has a simpler syntax and is easier to use for building web applications, while Node.js requires more knowledge of low-level APIs</ListGroup.Item>
//                         </ListGroup>
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             <Card className='my-4'>
//                 <Card.Body className='text-center'>
//                     <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
//                     <Card.Text>
//                         A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract,
//                         either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
//                         <br />
//                         The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic
//                         (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default Blog;