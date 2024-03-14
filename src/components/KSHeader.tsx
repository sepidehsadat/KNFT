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
            <Navbar expand="lg" className={`${Style.ks_header} bg-body-tertiary`}>
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="#home"> <img className={Style.ks_header_logo} src={logo} alt="logo" /></Navbar.Brand>
                    <div className='d-block d-md-none'>
                        <KSButtonGray title={"ورود و ثبت نام"} />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={Style.active}>صفحه اصلی</Nav.Link>
                            <Nav.Link href="#link"> لیست دوره ها</Nav.Link>
                            <Nav.Link href="#link">درباره ما</Nav.Link>
                            <Nav.Link href="#link">ارتباط با ما</Nav.Link>
                        </Nav>
                        <div className='d-flex'>
                            <p className='font-14-normal-400 mb-0 ms-4'>ارتباط با پشتیبانی<br />۰۲۱-۴۵۶۵۶</p>
                            <KSButton title={"ورود و ثبت نام"} onclick={()=>{}}/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
