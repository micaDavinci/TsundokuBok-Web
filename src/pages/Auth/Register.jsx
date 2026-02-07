import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./register.css";

export const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // más adelante va la lógica real
        console.log("Registro enviado");
    };

    return (
        <Container className="register-section">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={8}>
                    <Card className="card-shadow">
                        <Card.Body>
                            <h2 className="register-title text-center">
                                Crear cuenta
                            </h2>

                            <p className="register-subtitle text-center">
                                Registrate para empezar a organizar tu biblioteca
                            </p>

                            <Form onSubmit={handleSubmit} className="p-4">
                                <Form.Group className="mb-3" controlId="registerName">
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </Form.Group>

                                 <Form.Group className="mb-3" controlId="registerLibrary">
                                    <Form.Label>Nombre de biblioteca</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tu biblioteca"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registerEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registerPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="********"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="registerPasswordRepeat">
                                    <Form.Label>Repetir contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="********"
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="register-button">
                                    Crear cuenta
                                </Button>

                                <div className="register-footer text-center">
                                    ¿Ya tenés cuenta?{" "}
                                    <a href="/login">Iniciar sesión</a>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
