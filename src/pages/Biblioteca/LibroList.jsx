import { useState } from "react";
import { Badge, Card, Col, Row, Dropdown, Modal, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LibroList = (libro) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col>
            <Card className="card-shadow">
                <Card.Body>
                    <Row>
                        <div className="d-flex justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size="sm" />
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleShow}>Mover</Dropdown.Item>
                                    <Dropdown.Item>Eliminar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Mover libro</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="tituloInput">
                                            <Form.Label>Título</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Título del libro" // Completar con título del libro
                                                autoFocus
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="estanteriaInput">
                                            <Form.Label>Mover a</Form.Label>
                                            <Form.Select>
                                                <option>[Estante de destino]</option>
                                                <option value="1">Fantasía</option>
                                                <option value="2">Esi</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Img src="../img/img.jpg" className="img-fluid p-1 rounded-start" />
                        </Col>
                        <Col>
                            <Link to={`/mi-biblioteca/libro${libro.id_libro}`} className="link-offset-2 link-underline link-underline-opacity-0">
                                <Card.Title className="color-rosaT">{libro.titulo}</Card.Title>
                                <Card.Text className="color-rosaO">{libro.autor}</Card.Text>
                            </Link >
                            <Card.Text className="color-verdeB">{libro.valoracion}</Card.Text>
                            <Badge bg="secondary">{libro.estado}</Badge>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}