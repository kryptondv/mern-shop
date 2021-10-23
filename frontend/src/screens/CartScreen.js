import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart } from '../actions/cartItems';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;
    const qty = location.search ? +location.search.replace('?qty=', '') : 1;

    const dispatch = useDispatch();

    const { cartItems } = useSelector(({ cart }) => cart);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return <div>Cart</div>;
};

export default CartScreen;
