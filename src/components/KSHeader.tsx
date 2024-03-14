import React from 'react'
import Style from "./KSHeader.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/header_logo.png";
import KSButton from './KSButton'
import KSButtonGray from './KSButtonGray';

export default function KSHeader()
{
    return (
        <>
            <Navbar expand="lg" className={`${Style.ks_header} bg-body-tertiary `}>
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#home"> <img className={Style.ks_header_logo} src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="active">Home </Nav.Link>
                            <Nav.Link href="#link">All NFTS</Nav.Link>
                            <Nav.Link href="#link">Team</Nav.Link>
                            <Nav.Link href="#link">Terms & Co</Nav.Link>

                            <Nav.Link href="#link">Contact</Nav.Link>

                        </Nav>
                        <div className='d-flex'>
                            <KSButton title={"Get in Touch"} onclick={() => { }} />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
