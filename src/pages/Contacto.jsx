import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Contacto.css";

export const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // más adelante acá va la lógica del backend
        console.log("Formulario enviado");
    };

    return (
        <Container className="contact-section">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={8}>
                    <Card className="contact-card p-4">
                        <Card.Body>
                            <h2 className="contact-title text-center">
                                Contacto
                            </h2>

                            <p className="contact-subtitle text-center">
                                ¿Tenés dudas, sugerencias o simplemente querés escribirnos?
                            </p>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="contactName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="contactEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="contactMessage">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Escribí tu mensaje acá..."
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="contact-button"
                                >
                                    Enviar mensaje
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
