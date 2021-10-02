import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart" className="d-flex align-items-center">
                                <FaShoppingCart className="mr-1" />
                                <span>Cart</span>
                            </Nav.Link>
                            <Nav.Link href="/login" className="d-flex align-items-center ml-2">
                                <FaUser className="mr-1" />
                                <span>Sign In</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
