import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Card } from "react-bootstrap";
import nave from "../assets/img/cohete.png";
import { ArrowRightCircle } from "react-bootstrap-icons"; 

export const Plains = () => {
    return (
        <section className="plains" id="plains" >
            <Container>
                <div className="text-center">
                   <h2>Planes</h2>
                </div>

                <Row >
                    <Col md={6}  className="justify-content-center mt-5" >
                        <Card className="card-bg" >
                            <Card.Body>
                                <Card.Title className="text-center titleCard">PRESENCIAL</Card.Title>
                    
                                    <Card.Text>
                                        <br /><br />
                                        <div className="text-center">
                                            <img src={nave} /> 
                                        </div>
                                        A) Gradual: Duración de cinco meses y medio ), cuatro (4) horas semanales un día a la semana o dos (2) jornadas de dos (2) horas a la semana.
                                        <br /> <br />
                                        <hr />
                                        B) Intensivo: once (11) días hábiles, cuatro horas (4) diarias.
                                    </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><Badge bg="info">Gradual</Badge> <h3>$550.000</h3> (Faciliadad de Pago )</ListGroup.Item>
                                <ListGroup.Item><Badge bg="info">Intensivo</Badge> <h3>$550.000</h3>  (De Contado)</ListGroup.Item>
                                <ListGroup.Item className="listItemColor"><a href="https://wa.link/g9rno3">Quiero mas Información <ArrowRightCircle size={25} /></a></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col md={6}  className="justify-content-center mt-5" >
                        <Card className="card-bg" >
                            <Card.Body>
                                <Card.Title className="text-center titleCard" >VIRTUAL</Card.Title>
              
                                    <Card.Text > 
                                        <br /><br />
                                        <div className="text-center">
                                            <img src={nave} /> 
                                        </div>
                                     
                                        A) Gradual: Duración de cinco meses y medio , cuatro (4) horas semanales un día a la semana o dos (2) jornadas de dos (2) horas a la semana.
                                        <br /> <br />

                                        <hr />
                                        B) Intensivo: once (11) días hábiles, tres horas (3) diarias.   
                                    </Card.Text>
                 
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><Badge bg="info">Gradual</Badge> <h3> $330.000 </h3>(Faciliadad de Pago )</ListGroup.Item>
                                <ListGroup.Item><Badge bg="info">Intensivo</Badge> <h3> $300.000 </h3>  (De Contado)</ListGroup.Item>
                                <ListGroup.Item className="listItemColor"><a href="https://wa.link/g9rno3" >Quiero mas Información <ArrowRightCircle size={25} /></a></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}