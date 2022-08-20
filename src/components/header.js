import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
    render() {
        return (
            <>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="src/components/cartype.js">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        )
    }
}
export default Header;

