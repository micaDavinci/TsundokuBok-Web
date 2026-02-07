import { useState } from "react";
import { Badge, Card, Col, Dropdown, Row, Modal, Form, Button } from "react-bootstrap"

export const LibroDeseado = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col sm={12} md={6} lg={6}>
            <Card className="card-shadow">
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
                                        <Dropdown.Item onClick={handleShow}>Editar</Dropdown.Item>
                                        <Dropdown.Item>Eliminar</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Editar libro deseado</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Título</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Título del libro deseado" // Completar con título del libro
                                                autoFocus
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Prioridad</Form.Label>
                                            <Form.Select>
                                                <option value="1">Alta</option>
                                                <option value="2">Media</option>
                                                <option value="2">Baja</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button className="button-save" onClick={handleClose}>
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Card.Title className="color-rosaT">{props.titulo}</Card.Title>
                            <Card.Text className="color-rosaO">{props.autor}</Card.Text>
                            <Card.Text className="color-rosaO">{props.genero}</Card.Text>
                            <Card.Text className="color-rosaO">Prioridad: <Badge bg="secondary">{props.prioridad}</Badge></Card.Text>
                        </Col>
                    </Row>


                </Card.Body>
            </Card>
        </Col>


    )
}