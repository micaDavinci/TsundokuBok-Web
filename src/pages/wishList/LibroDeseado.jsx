import { Badge, Card, Col, Dropdown, Row, Modal, Form, Button } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const LibroDeseado = ({ wishListId }) => {
    const [show, setShow] = useState(false);

    const { token } = useAuth();
    const [librosList, setLibrosList] = useState([]);

    useEffect(() => {
        if (token) {
            getLibrosList();
        }
    }, []);

    const getLibrosList = async () => {
        try {
            const request = await api.get(`/librosList/${wishListId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                setLibrosList(request.data.result);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {librosList.length === 0 ? (
                <p>Todavía no hay libros en la lisa de deseos.</p>
            ) : (
                
                librosList.map( (libro) => (
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
                                            <Dropdown.Toggle variant="secondary" id={libro.titulo} size="sm" />
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handleShow}>Editar</Dropdown.Item>
                                                <Dropdown.Item>Mover a mi biblioteca</Dropdown.Item>
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

                                    <Card.Title className="color-rosaT">{libro.titulo}</Card.Title>
                                    <Card.Text className="color-rosaO">{libro.autor}</Card.Text>
                                    <Card.Text className="color-rosaO">{libro.genero}</Card.Text>
                                    <Card.Text className="color-rosaO">Prioridad: <Badge bg="secondary">{libro.prioridad}</Badge></Card.Text>

                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            ))
            )}
        </>


    )
};