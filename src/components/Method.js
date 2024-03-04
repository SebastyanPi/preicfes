import { Container, Row, Col } from "react-bootstrap";
import { BiLaptop } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";

export const Method = () => {
    return (
        <section className="method" id="method">
            <Container>             
                <Row>
                    <Col x2={12} md={12}>
                    <div className="text-center">
                        <h2> Metodología </h2>
                    </div>
                    </Col>

                    <Col xs={12} lg={12}  className="item-method"  >
                        <h4 className="text-center"><FaChalkboardTeacher /> Presencial</h4>
                        <p>
                        En la sede principal de Barrancabermeja y en las  instituciones educativas que lo requieran con previa organización, con la siguiente metodología: <br /> <br />
                    <b>A)</b> Se realizará, al inicio, una prueba piloto con el docente asignado por cada competencia, tipo Icfes. <br /> <br />
                    <b>B)</b> Cada docente, basado en la prueba piloto, resolverá DIFERENTES preguntas, explicando las estrategias de abordaje de acuerdo al grado de complejidad; desarrollando, habilidades y confianza, en resolver las preguntas en contexto Icfes. <br /> <br />
                    <b>C)</b> Al final del refuerzo de cada competencia se realizará otra prueba tipo Icfes. <br /> <br />
                    <b>D)</b> El último día de la capacitación, nuevamente se realizará una prueba general con todas las competencias, para generar la destreza con habilidades y confianza necesaria para abordar y resolver pruebas tipo Icfes. <br /> <br />
                        </p>
                    </Col>
                    <Col xs={12} lg={12}  className="item-method">
                        <h4 className="text-center" ><BiLaptop /> Virtual</h4>
                        <p className="text-justify-n">
                        Se desarrollará con un docente en línea, a través de la plataforma Google Meet, con la siguiente metodología: <br /> <br />
A) Se realizará, al inicio, una prueba piloto con el docente asignado por cada competencia, tipo Icfes a través de la plataforma corporativa.<br /> <br />
B) Cada docente, basado en la prueba piloto, resolverá diferentes preguntas, explicando las estrategias de abordaje de acuerdo al grado de complejidad; desarrollando, habilidades y confianza, en resolver las preguntas en contexto Icfes. <br /> <br />
C) Al final del refuerzo de cada competencia, se realizará otra prueba tipo Icfes, a través de la plataforma corporativa. <br /> <br />
D) El último día de la capacitación, nuevamente se realizará una prueba general con todas las competencias, para generar la destreza con habilidades y confianza necesaria para abordar y resolver pruebas tipo Icfes a través de la plataforma corporativa.<br /> <br />
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}