import { Container, Row, Col  } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import recurso from '../assets/img/recurso.png';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
             
                    <Col sm={6}>
                        <h2>“APRUEBATE”</h2>
                        <span>Correo : academia@institutointesa.edu.co</span> <br />
                        <span>WhatsApp : <a href="https://wa.link/g9rno3">+57 310 4962668</a> </span>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                    
                            <a href="https://www.facebook.com/INTESABARRANCABERMEJA2018"><img src={navIcon2} alt="Logo" /></a>
                            <a href="https://www.instagram.com/instituto.intesa/"><img src={navIcon3} alt="Logo" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved SebastyanDev </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}