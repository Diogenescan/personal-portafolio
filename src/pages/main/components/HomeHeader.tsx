import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

import logo from '../../../assets/images/logo/my_logo.png';

import '../styles/home_header.css';

const Header = () => {
    return (
        <header className="Header">
            <Navbar className="Navigation-Bar" expand="md">
                <Container className={"Container"}>
                    <Navbar.Brand className={"Brand"}>
                        <a href={"https://ncatlab.org/nlab/show/Kochen-Specker+theorem"}>
                            <img className="Logo" src={logo} alt="K.S Logo"/>
                        </a>
                        S. Pérez
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="index-header-navbar-items" />
                    <Navbar.Collapse id="index-header-navbar-items">
                        <Nav className="Header-Nav-Links">
                            <Nav.Link className={"Nav-Item"} href="/personal-portafolio">Home</Nav.Link>
                            <NavDropdown className={"Nav-Item"} id={"index-header-nav-items-dropdown"} title={"Projects"}>
                                <NavDropdown.Item className={"Dropdown-Item"} href={"/personal-portafolio/projects/development"}>
                                    Software Engineering
                                </NavDropdown.Item>
                                <NavDropdown.Item className={"Dropdown-Item"} href={"/personal-portafolio/projects/data"}>
                                    Data Science
                                </NavDropdown.Item>
                                <NavDropdown.Item className={"Dropdown-Item"} href={"/personal-portafolio/projects/other"}>
                                    Others
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button
                                className={"Contact-Button"}
                                variant={"outline-dark"}>
                                Contact Me
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;