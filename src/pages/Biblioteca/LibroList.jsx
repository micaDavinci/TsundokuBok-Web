import { useState, useEffect, use } from "react";
import { Badge, Card, Col, Row, Dropdown, Modal, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const LibroList = ({libro, refreshEstante}) => {
    const {id_libro, titulo, autor, estado, valoracion} = libro;
    const { token } = useAuth();

    const [estantes, setEstantes] = useState([]);
    const [idLibro, setIdLibro] = useState("");
    const [estanteDestino, setEstanteDestino] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (token) {
            getEstantes();
        }
    }, []);

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

    const handleMove = async () => {
        try {
            const request = await api.put(`/mover-libro/${idLibro}`,
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
                refreshEstante();
                handleClose();
                setIdLibro("");
                setEstanteDestino("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al mover el libro, por favor intente más tarde");
        }
    }

   const handleEliminar = async () => {
    const confirmDelete = window.confirm(
        "Esta acción es irreversible ¿Está seguro/a de que desea eliminar este libro?"
    );

    if (!confirmDelete) return;

    try {
        const request = await api.delete(
            `/eliminar-libro/${id_libro}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (request.data.success) {
            refreshEstante();
        }

    } catch (error) {
        console.error(error);
    }
};

    const handleShow = (libroID) => {
        setIdLibro(libroID.id_libro);
        setShow(true);
    }

    const handleClose = () => setShow(false);

    return (
        <Col>
            <Card className="card-shadow">
                <Card.Body>
                    <Row>
                        <div className="d-flex justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size="sm" />
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleShow(libro)}>Mover</Dropdown.Item>
                                    <Dropdown.Item onClick={handleEliminar}>Eliminar</Dropdown.Item>
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
                                                placeholder={titulo} // Completar con título del libro
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
                                    <Button variant="primary" onClick={handleMove}>
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
                            <Link to={`/mi-biblioteca/libro${id_libro}`} className="link-offset-2 link-underline link-underline-opacity-0">
                                <Card.Title className="color-rosaT">{titulo}</Card.Title>
                                <Card.Text className="color-rosaO">{autor}</Card.Text>
                            </Link >
                            <Badge className="mt-4" bg="secondary">{estado}</Badge>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}