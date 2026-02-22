import { Row, Button, Form, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import { EstanteList } from './EstanteList'

import '../../App.css'

export const Biblioteca = () => {
    const { token } = useAuth();
    const [show, setShow] = useState(false);
    const [estantes, setEstantes] = useState([]);
    const [nombre, setNombre] = useState("");

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

    const handleNew = async () => {
        try {
            const request = await api.post("/nuevo-estante",
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
                await getEstantes();
                setNombre("");
                setShow(false);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al guardar el estante, por favor intente más tarde");
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h1>Biblioteca</h1>

            <div className='d-flex justify-content-end my-2'>
                <Button className='button-rosa' onClick={handleShow}>
                    <i className="bi bi-plus-lg"> Nuevo</i>
                </Button>

            </div>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo estante</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Nombre"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className='button-save' onClick={handleNew}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className='g-3'>

                {estantes.length === 0 ? (
                    <p>No hay estantes creados todavía.</p>
                ) : (
                    estantes.map((estante) => (
                        <EstanteList key={estante.id_estante} id_estante={estante.id_estante} nombre={estante.nombre} cantidad_libros={estante.cantidad_libros} />
                    ))

                )}
            </Row>
        </>
    )
}