import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';

const Header = () => {
    const {user, logout} = Useauth();
    return (

        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h1>Medi Care</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/testimonial">Testimonial</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Apointment</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            {
                                user?.email ?
                                <Button varient="light" onClick={logout}>Logout</Button>:
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            


                        </Nav>
                        <Navbar.Text>
                            <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>



        </>


    );

};

export default Header;