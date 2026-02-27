import { Badge, Card, Col, Dropdown, Row, Modal, Form, Button } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const LibroDeseado = ({ wishListId }) => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedLibro, setSelectedLibro] = useState(null);

    const { user, token } = useAuth();
    let admin = "ADMIN";
    let lector = "LECTOR";
    const server = import.meta.env.VITE_API_URL;

    const [librosList, setLibrosList] = useState([]);
    const [estanteDestino, setEstanteDestino] = useState("");
    const [nuevaPrioridad, setNuevaPrioridad] = useState("");
    const [estantes, setEstantes] = useState([]);

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

    const getEstantes = async () => {
        try {
            const request = await api.get("/estantes", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                setEstantes(request.data.result);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al recuperar los estantes, por favor intente más tarde");
        }
    }

    const handleMover = async () => {
        try {
            if (!selectedLibro) return;

            const request = await api.put(`/mover-libro/${selectedLibro.id_libro}`,
                {
                    id_ubicacion: Number(estanteDestino)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (request.data.success) {
                handleClose();
                getLibrosList();
                setEstanteDestino("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al mover el libro, por favor intente más tarde");
        }
    }

    const hanldeEditarPrioridad = async () => {
        try {
            const request = await api.put(`/editar-prioridad/${selectedLibro.id_libro}`,
                {
                    prioridad: nuevaPrioridad
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (request.data.success) {
                handleClose();
                getLibrosList();
                setNuevaPrioridad("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al mover el libro, por favor intente más tarde");
        }
    }

    const handleEliminar = async (libro) => {
        const confirmDelete = window.confirm(
            "Esta acción es irreversible ¿Está seguro/a de que desea eliminar este libro?"
        );

        if (!confirmDelete) return;

        try {
            const request = await api.delete(
                `/eliminar-libro/${libro.id_libro}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (request.data.success) {
                getLibrosList();
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleShowMove = (libro) => {
        setSelectedLibro(libro);
        getEstantes();
        setActiveModal("move");
    }

    const handleShowPriority = (libro) => {
        setSelectedLibro(libro);
        setActiveModal("priority");
    }

    const handleClose = () => {
        setActiveModal(null);
        setSelectedLibro(null);
    };

    return (
        <>
            {librosList.length === 0 ? (
                <p>Todavía no hay libros en la lisa de deseos.</p>
            ) : (

                <>
                    {librosList.map((libro) => (
                        <Col key={libro.id_libro} sm={12} md={6} lg={6}>
                            <Card className="card-shadow">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Img
                                                src={
                                                    libro.portada
                                                        ? `${server}/uploads/portadas/${libro.portada}`
                                                        : libro.portadaGoogle
                                                            ? libro.portadaGoogle
                                                            : `${server}/uploads/portadas/default-cover.jpg`
                                                }
                                                alt={libro.titulo}
                                                style={{ width: '150px', height: 'auto' }}
                                                className="img-fluid p-1 rounded-start"
                                            />
                                        </Col>
                                        <Col>

                                            {[admin, lector].includes(user?.role) && (
                                                <div className="d-flex justify-content-end">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" />
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleShowPriority(libro)}>Editar prioridad</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleShowMove(libro)} >Mover a mi biblioteca</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleEliminar(libro)}>Eliminar</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            )}


                                            <Card.Title className="color-rosaT">{libro.titulo}</Card.Title>
                                            <Card.Text className="color-rosaO">{libro.autor}</Card.Text>
                                            <Card.Text className="color-rosaO">{libro.genero}</Card.Text>
                                            <Card.Text className="color-rosaO">Prioridad: <Badge bg="secondary">{libro.prioridad}</Badge></Card.Text>

                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                    ))}

                    <Modal show={activeModal === "priority"} onHide={() => setActiveModal(null)} aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar prioridad</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={selectedLibro?.id || ""}
                                        placeholder={selectedLibro?.titulo || ""}
                                        autoFocus
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Prioridad</Form.Label>
                                    <Form.Select
                                        value={nuevaPrioridad}
                                        onChange={(e) => setNuevaPrioridad(e.target.value)}>
                                        <option>[Seleccionar prioridad]</option>
                                        <option value="ALTA">Alta</option>
                                        <option value="MEDIA">Media</option>
                                        <option value="BAJA">Baja</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button className="button-save" onClick={hanldeEditarPrioridad}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={activeModal === "move"} onHide={() => setActiveModal(null)} aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Mover libro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="tituloInput">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={selectedLibro?.titulo || ""}
                                        autoFocus
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="estanteriaInput">
                                    <Form.Label>Mover a</Form.Label>
                                    <Form.Select
                                        value={estanteDestino}
                                        onChange={(e) => setEstanteDestino(e.target.value)}>
                                        <option>[Estante de destino]</option>

                                        {estantes.map((estante) => (
                                            <option
                                                key={estante.id_estante}
                                                value={estante.id_estante}
                                            >{estante.nombre}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={handleMover}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </>
            )
            }
        </>


    )
};