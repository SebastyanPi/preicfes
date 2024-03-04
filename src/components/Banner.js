import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/img/header-img.svg";
import headerImg2 from "../assets/img/header-img2.png";
import { FaWhatsapp } from "react-icons/fa";



export const Banner = () => {

    const toRotate = ["“APRUEBATE”", "“APRUEBATE”", "“APRUEBATE”"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval( () => {
            tick();
        },delta)

        return () => {
            clearInterval(ticker);
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2 )
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg2} alt="Header img" />
                    </Col>

                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Preparaté para las Pruebas Saber 11</span>
                        <h1>{ `Con `  } <span className="wrap">{ text }</span></h1>
                        <p> <b> ¡Obtén la destreza y la habilidad que garanticen un excelente resultado! </b> </p>
                        <p>El programa está organizado en secciones teorica-practica con el fin de desarrollar las competencias evaluadas en las pruebas icfes Saber 11</p>
                        <button onClick={  () => window.location.href = "https://wa.link/g9rno3" }> Contáctanos  <ArrowRightCircle size={25} /> </button>
                    </Col>

                   
                </Row>
            </Container>
        </section>
    )
}