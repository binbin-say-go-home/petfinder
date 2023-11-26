import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../components/css/header.css';

export function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src="/img/PetFinderLogo.png" width="80" height={80} alt="PetFinder Logo" />
                </Navbar.Brand>
                
                <Nav className="d-flex align-items-center w-100">
                    <h1 className="text-white mb-0 ml-3">Pet Society!</h1>
                </Nav>

                <Navbar.Brand href="/petRelease" className="Brand_PetRelease">Release your pet</Navbar.Brand>

                <Navbar.Brand href="/JoinUs">
                    <img src="/img/JoinUs.png" width="80" height={80} alt="Join Us" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
