import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

import { addToCart } from '../actions/cartItems';
import Message from '../components/Message';
import QtySelector from '../components/QtySelector';

const CartScreen = ({ match, location, history }) => {
    const addedQty = location.search ? +location.search.replace('?qty=', '') : 1;

    const productId = match.params.id;

    const dispatch = useDispatch();

    const { cartItems } = useSelector(({ cart }) => cart);

    const removeFromCart = id => {};

    const changeProductQty = (val, product) => {
        dispatch(addToCart(product, val));
    };

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, addedQty));
        }
    }, [dispatch, productId, addedQty]);

    const getSubtotalCount = () => {
        const subtotalCount = cartItems.reduce((acc, { qty }) => acc + qty, 0);
        return `${subtotalCount} item${subtotalCount !== 1 && 's'}`;
    };

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
                        {cartItems.map(({ product, name, image, price, countInStock, qty }) => (
                            <ListGroup.Item key={product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={image} ale={name} fluid rounded></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${product}`}>{name}</Link>
                                    </Col>
                                    <Col md={2}>{price}</Col>
                                    <Col md={2}>
                                        <QtySelector
                                            qty={qty}
                                            countInStock={countInStock}
                                            setQty={val => changeProductQty(val, product)}
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
            </Col>{' '}
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Subtotal ({getSubtotalCount()})</h2>$
                            {cartItems.reduce((acc, { price, qty }) => acc + price * qty, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link
                                className={`btn btn-dark btn-block ${cartItems.length === 0 && 'disabled'}`}
                                to="/login?redirect=shipping"
                            >
                                Proceed to checkout
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
        </Row>
    );
};

export default CartScreen;
