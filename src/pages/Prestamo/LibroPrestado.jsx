import { useState } from "react";
import { Badge, Card, Col, Row, Dropdown, Modal, Form, Button } from "react-bootstrap"

export const LibroPrestado = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col sm={12} md={6} lg={6}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Img src="../img/img.jpg" className="img-fluid p-1 rounded-start" />
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id={props.titulo} size="sm" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Devuelto</Dropdown.Item>
                                        <Dropdown.Item onClick={handleShow}>Editar</Dropdown.Item>
                                        <Dropdown.Item>Eliminar</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>


                            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Editar préstamo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Título</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Título del libro prestado" // Completar con título del libro
                                                autoFocus
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Persona</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Persona" // Nombre de la persona
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                        <Form.Label>Fecha de préstamo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="DD/MM/AA" // Fecha de préstamo
                                            autoFocus
                                        />
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

                            <Card.Title className="color-rosaT">{props.titulo}</Card.Title>
                            <Card.Text className="color-rosaO">{props.autor}</Card.Text>
                            <Card.Title className="color-rosaT">{props.persona}</Card.Title>
                            <Card.Text className="color-rosaO">Fecha de préstamo: {props.fecha}</Card.Text>
                            <Card.Text className="color-verdeO">Estado: <Badge bg="secondary">{props.estado}</Badge></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}