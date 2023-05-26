import React from 'react';
import { Card, Container } from 'react-bootstrap';
// import b3 from '../../../assets/images.jpg'
// import r1 from '../../../assets/download.jpg'
import psonal from '../../../assets/images (2).jpg'
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { FaHeart, FaCookie, FaLocationArrow } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import FoodItems from '../FoodItems/FoodItems';

const Singalchefs = () => {
    const chefsData = useLoaderData();
    // console.log(chefsData);
    const { id } = useParams();
    // console.log(id);

    const x = chefsData.find(obj =>
        obj.id == id
    )
    // setDatas(x)
    return (
        <Container>
            <div className='row mx-auto'>
                <div className='cols col-sm-5 p-4 mt-4'>
                    <Card>
                        <Card.Img variant="top" src={x?.picture} />
                    </Card>
                </div>
                <div className='cols col-sm-6 p-4'>
                    <Card>
                        <Card.Img style={{ height: '75px' }} variant="top" src={psonal} />
                        <Card.Body>
                            <Card.Title>{x?.name}</Card.Title>
                            <Card.Text>
                                {x.bio['description']}
                            </Card.Text>
                            <Card.Text>
                                <FaLocationArrow></FaLocationArrow><span style={{ marginLeft: '5px' }}>{x.bio['location']}</span>
                            </Card.Text>
                            <Card.Text>
                                Marital Status: {x?.marital_status}
                            </Card.Text>
                            <Card.Text>
                                <span className='text-decoration-underline'>Cooking Methods:</span> {x.methods}
                            </Card.Text>
                            <Card.Text className='my-1'>
                                {/* <FaLocationArrow></FaLocationArrow><span className='mx-2'>{x.bio['location']}</span> */}
                            </Card.Text>
                            {/* <Card.Text>
                             Marital Status: {x.marital_status.map( fav => <p>{fav}</p>)}
                            </Card.Text> */}
                            <Card.Text>
                                Total Number of Recipes: <FaCookie></FaCookie> {x.recipes}
                            </Card.Text>
                            <Card.Text>
                                Total Like: <FaHeart></FaHeart>{x.likes}
                            </Card.Text>
                            {/* <button onClick={handleFavorite} disabled={favorite} className='btn btn-outline w-3/4 mt-6 mx-auto btn-success'>Favorite</button> */}

                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='row mt-4'>
                <h1 className='text-center'>Popular three distes of {x?.name} </h1>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                    {
                        x.specialties.map(foods =>
                            <FoodItems
                                key={name}
                                foods={foods}
                            ></FoodItems>
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Singalchefs;