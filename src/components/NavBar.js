import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg';
import recurso from '../assets/img/recurso.png';
import navIcon1 from '../assets/img/whats.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={ scrolled ? "scrolled" : "" }>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={recurso} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('home') } >Principal</Nav.Link>
                    <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('skills') } >Entrenamiento</Nav.Link>
                    <Nav.Link href="#method" className={ activeLink === 'method' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('method') } >Metodología</Nav.Link>
                    <Nav.Link href="#plains" className={ activeLink === 'plains' ? 'active navbar-link' : 'navbar-link' } onClick={ () => onUpdateActiveLink('plains') } >Planes</Nav.Link>
                   
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.facebook.com/INTESABARRANCABERMEJA2018"><img src={navIcon2} alt="Logo" /></a>
                        <a href="https://www.instagram.com/instituto.intesa/"><img src={navIcon3} alt="Logo" /></a>
                    </div>

                    <button className="vvd" onClick={ () => window.location.href = "https://wa.link/g9rno3" } >
                        <span> Mas Información </span>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}