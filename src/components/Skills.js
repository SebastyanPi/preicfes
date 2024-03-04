import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter3.svg";
import meter3 from "../assets/img/meter3.svg";

import ansiedad from "../assets/img/ansiedad.png";
import estrategias from "../assets/img/estrategias.png";
import hora from "../assets/img/hora.png";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col >
                        <div className="skill-bx">
                            <h2>
                                Entrenamiento
                            </h2>
                            <p className="text-justify-n">El proceso de entrenamiento para el ICFES implica una evaluación inicial de habilidades, seguida de una planificación detallada con materiales de estudio. Los estudiantes practican regularmente con ejercicios y simulacros, reciben con de profesores. El enfoque no solo se centra en la memorización, sino también en el desarrollo de habilidades críticas. La gestión eficaz del tiempo es clave para asegurar una preparación integral para el examen. </p>
                        
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={hora} alt="" />
                                    <h5>Control del Tiempo</h5>
                                </div>

                                <div className="item">
                                    <img src={ansiedad} alt="" />
                                    <h5>Control de la Ansiedad</h5>
                                </div>

                                <div className="item">
                                    <img src={estrategias} alt="" />
                                    <h5>Dominio de Estrategias</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>

      )

}