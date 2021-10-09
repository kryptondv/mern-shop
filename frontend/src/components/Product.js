import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, rating, numReviews, price } = product;
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} variant="top"></Card.Img>
                <Card.Body>
                    <Card.Title as="div">
                        <strong>{name}</strong>
                    </Card.Title>
                </Card.Body>
            </Link>
            <Card.Text as="div">
                <Rating val={rating} text={`${numReviews} reviews`} />
            </Card.Text>
            <Card.Text as="h3">${price}</Card.Text>
        </Card>
    );
};

export default Product;
