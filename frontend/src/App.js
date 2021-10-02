import { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Container>
                    <h1>Welcome to Proshop</h1>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
