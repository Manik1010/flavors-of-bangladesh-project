import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart,FaCookie } from 'react-icons/fa'
// import b3 from '../../assets/images (1).jpg';
import b3 from '../../../assets/images (1).jpg';
import { Link } from 'react-router-dom';


const Allchefs = ({ alllData }) => {
    // const Allchefs = () => {
    // console.log(alllData);
    const { id, name, picture,  likes, experience, recipes } = alllData;
    // console.log(picture);
    return (
        <>
            {/* <h1 className='textt-center'>ALL Chef Here</h1> */}

            {/* <div className=''> */}
                <Card className="bg-light text-black ">
                    <Card.Img src={picture} alt="Card image"  />
                    <Card.ImgOverlay>
                        <Card.Title>Chef Name: {name}</Card.Title>
                        <Card.Text>
                            Years of experience:{experience}
                        </Card.Text>
                        <Link to={`/chefs/${id}`}>
                            <Button variant="primary">View Recipes</Button>
                        </Link>
                    </Card.ImgOverlay>
                    <Card.Footer className="d-flex">
                        <div className='flex-grow-1 d-flex align-items-center'>
                        <FaHeart></FaHeart>Like{likes}
                        </div>
                        <div>
                        <FaCookie></FaCookie>Numbers of recipes:{recipes}
                        </div>
                    </Card.Footer>
                </Card>
            {/* </div> */}
        </>
    );
};

export default Allchefs;