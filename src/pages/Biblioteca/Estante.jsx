import { Breadcrumb, BreadcrumbItem, Row, Button, Form, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import '../../App.css'
import { LibroList } from "./LibroList"

export const Estante = (props) => {
    const { id } = useParams();
    const { token } = useAuth();

    const [estanteNombre, setEstanteNombre] = useState("");
    const [show, setShow] = useState(false);
    const [estanteList, setEstanteList] = useState("");
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        if (token) {
            getEstanteList();
        }
    }, []);

    const getEstanteList = async () => {
        try {
            const request = await api.get(`/librosList/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (request.data.success) {
                setEstanteList(request.data.result);
                getEstanteNombre();
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const getEstanteNombre = async () => {
        try {
            const request = await api.get(`/recuperar-estante/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (request.data.success) {
                setEstanteNombre(request.data.result.nombre);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleEdit = async() => {
        try {
            const request = await api.put(`/editar-estante/${id}`,
                {
                    nombre
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (request.data.success) {
                handleClose();
                await getEstanteList();
                setNombre("");
                
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>{estanteNombre}</h1> {/* Nombre del estante */}
                <Button className='button-gris me-4' onClick={handleShow}>
                    <i class="bi bi-pencil-square"> Editar</i>
                </Button>

            </div>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar estante</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder={estanteNombre} // Nombre de estante
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className='button-save' onClick={handleEdit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Breadcrumb>
                <BreadcrumbItem className="color-rosaO">
                    <Link to="/mi-biblioteca/biblioteca" className="color-rosaO">Biblioteca</Link>
                </BreadcrumbItem>
                <Breadcrumb.Item active>{estanteNombre}</Breadcrumb.Item> {/* Nombre del estante */}
            </Breadcrumb>

            <Row xs={1} md={2} className="g-4">

                {estanteList.length === 0 ? (
                    <p>No hay libros guardados en el estante todavía.</p>
                ) : (
                    estanteList.map((libro) => (
                        <LibroList key={libro.id_libro} id_libro={libro.id_libro} titulo={libro.titulo} autor={libro.autor} estado={libro.estado} valoracion={libro.valoracion}/>
                    ))

                )}
            </Row>

        </>
    )
}

