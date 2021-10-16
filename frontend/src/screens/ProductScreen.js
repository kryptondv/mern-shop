import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productDetailsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import QtySelector from '../components/QtySelector';

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const { id } = match.params;

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
    const { name, image, rating, numReviews, price, description, countInStock } = product;

    const inStock = countInStock > 0;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [id, dispatch]);

    const addToCart = () => {
        history.push(`/cart/${id}?qty=${qty}`);
    };

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={'danger'}>{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={image} alt={name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating val={rating} text={`${numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${price}</ListGroup.Item>
                            <ListGroup.Item>Description: ${description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>${price}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>{`${inStock ? 'In' : 'Out of'} Stock`}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {inStock && (
                                    <ListGroup.Item>
                                        <QtySelector qty={qty} setQty={setQty} countInStock={countInStock} />
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button className="btn-block" type="button" disabled={!inStock} onClick={addToCart}>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
