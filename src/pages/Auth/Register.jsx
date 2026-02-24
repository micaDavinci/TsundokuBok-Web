import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/axios"

export const Register = () => {
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [biblioteca, setBiblioteca] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaRepetida, setContrasenaRepetida] = useState("");

    const handleRegister = async () => {
        try {
            const request = await api.post("/register", {
                nombre,
                biblioteca,
                email,
                contrasena,
                contrasenaRepetida
            });
            if (request.data.success) {
                navigate("/login");
            }
            alert(request.data.message);

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Ha surgido un error, por favor intente más tarde");
            }
        }
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

                            <Form className="p-4">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de biblioteca</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={biblioteca}
                                        onChange={(e) => setBiblioteca(e.target.value)}
                                        placeholder="Tu biblioteca"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                        placeholder="********"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Repetir contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={contrasenaRepetida}
                                        onChange={(e) => setContrasenaRepetida(e.target.value)}
                                        placeholder="********"
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    className="register-button"
                                    onClick={handleRegister}
                                >
                                    Crear cuenta
                                </Button>

                                {/* <Button type="submit" className="register-button">
                                    Crear cuenta
                                </Button> */}

                                <div className="register-footer text-center">
                                    ¿Ya tenés cuenta?{" "}
                                    <Link to="/login">Iniciar sesión </Link>

                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
