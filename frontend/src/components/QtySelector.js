import { Row, Col, Form } from 'react-bootstrap';

const QtySelector = ({ qty, setQty, countInStock }) => {
    return (
        <Row>
            <Col>Qty </Col>

            <Col>
                <Form.Control as="select" value={qty} onChange={({ target }) => setQty(target.value)}>
                    {[...Array(countInStock)].map((item, i) => {
                        const val = i + 1;
                        return (
                            <option key={val} value={val}>
                                {val}
                            </option>
                        );
                    })}
                </Form.Control>
            </Col>
        </Row>
    );
};

export default QtySelector;
