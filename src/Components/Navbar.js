import React, { useState } from "react";
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';

const NavbarComponent = () => <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Air-Asia Booking</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar.Collapse>
</Navbar>;

export default NavbarComponent;