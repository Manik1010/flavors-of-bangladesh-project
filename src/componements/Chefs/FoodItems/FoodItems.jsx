import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
// import Rating from 'react-rating';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegStar, FaStar } from 'react-icons/fa'

const FoodItems = ({ foods }) => {
    // console.log(foods.description);
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(true);
        toast.success("added to favorite");
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={foods.image_url} />
                <Card.Body>
                    <Card.Title>{foods.name}</Card.Title>
                    <Card.Text>
                        {foods.description}
                    </Card.Text>
                    <Card.Text>
                        <p>Cooking Method: {foods.methods}</p>
                    </Card.Text>
                    <Card.Text>
                        {/* <p>Ratting:</p>{foods.rating} */}
                        <div className='d-flex'>
                            <Rating style={{ maxWidth: 150 }} value = {foods.rating} readOnly />
                            <span className='ms-2'>{foods.rating}</span>
                        </div>
                    </Card.Text>
                </Card.Body>
                <button onClick={handleFavorite} disabled={favorite} className="btn btn-secondary">Favorite</button>
            </Card>
        </div>
    );
};

export default FoodItems;