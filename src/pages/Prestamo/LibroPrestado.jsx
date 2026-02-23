import { useState } from "react";
import { api } from "../../api/axios";
import { useAuth } from '../../context/AuthContext';
import { Badge, Card, Col, Row, Dropdown, Modal, Form, Button } from "react-bootstrap"

export const LibroPrestado = ({ prestamo, getPrestamoList }) => {
    const { id, titulo, autor, persona, fecha_prestamo, estado } = prestamo
    const { token } = useAuth();
    const [show, setShow] = useState(false);
    const [personaNueva, setPersonaNueva] = useState("");
    const [fechaNueva, setFechaNueva] = useState("");

    const handleEditar = async (prestamoID) => {
        try {
            const request = await api.put(`/editar-prestamo/${prestamoID}`,
                {
                    id, 
                    persona: personaNueva, 
                    fecha_prestamo: fechaNueva
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (request.data.success) {
                getPrestamoList();
                handleClose();

                setPersonaNueva("");
                setFechaNueva("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleFinalizar = async (prestamoID) => {
        const confirmDelete = window.confirm(
            "Esta acción es irreversible ¿Está seguro/a de que desea finalizar este prestamo?"
        );

        if (!confirmDelete) return;

        try {
            const request = await api.put(
                `/finalizar-prestamo/${prestamoID}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (request.data.success) {
                getPrestamoList();
            }

        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    };

    const handleEliminar = async (prestamoID) => {
        const confirmDelete = window.confirm(
            "Esta acción es irreversible ¿Está seguro/a de que desea eliminar este prestamo?"
        );

        if (!confirmDelete) return;

        try {
            const request = await api.delete(
                `/eliminar-prestamo/${prestamoID}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (request.data.success) {
                getPrestamoList();
            }

        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
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
                                        <Dropdown.Toggle variant="secondary" size="sm" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleFinalizar(id)}>Finalizar</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShow}>Editar</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleEliminar(id)}>Eliminar</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <Card.Title className="color-rosaT">{titulo}</Card.Title>
                                <Card.Text className="color-rosaO">{autor}</Card.Text>
                                <Card.Title className="color-rosaT">{persona}</Card.Title>
                                <Card.Text className="color-rosaO">Fecha de préstamo: {new Date(fecha_prestamo).toLocaleDateString('es-AR')}</Card.Text>
                                <Card.Text className="color-verdeO">Estado: <Badge bg="secondary">{estado}</Badge></Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

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
                                placeholder={titulo}
                                autoFocus
                                disabled
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Persona</Form.Label>
                            <Form.Control
                                type="text"
                                name="persona"
                                value={personaNueva}
                                onChange={(e) => setPersonaNueva(e.target.value)}
                                placeholder={persona}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de préstamo</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_prestamo"
                                value={fechaNueva}
                                onChange={(e) => setFechaNueva(e.target.value)} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className="button-save" onClick={() => handleEditar(id)}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}