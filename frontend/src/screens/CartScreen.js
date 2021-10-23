import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

import { addToCart } from '../actions/cartItems';
import Message from '../components/Message';
import QtySelector from '../components/QtySelector';

const CartScreen = ({ match, location, history }) => {
    const initialQty = location.search ? +location.search.replace('?qty=', '') : 1;

    const [qty, setQty] = useState(initialQty);

    const productId = match.params.id;

    const dispatch = useDispatch();

    const { cartItems } = useSelector(({ cart }) => cart);

    const removeFromCart = id => {};

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to="/">Go back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map(({ product, name, image, price, countInStock }) => (
                            <ListGroup.Item key={product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={image} ale={name} fluid rounded></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/proudct/${product}`}>{name}</Link>
                                    </Col>
                                    <Col md={2}>{price}</Col>
                                    <Col md={2}>
                                        <QtySelector
                                            qty={qty}
                                            countInStock={countInStock}
                                            setQty={setQty}
                                        ></QtySelector>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light" onClick={() => removeFromCart(product)}>
                                            <FaTrash></FaTrash>Remove
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
        </Row>
    );
};

export default CartScreen;
