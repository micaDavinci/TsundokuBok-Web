import { Row, Button, Form, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import '../../App.css'
import { LibroPrestado } from './LibroPrestado'

export const Prestamo = () => {
    const [show, setShow] = useState(false);

    const { token } = useAuth();
    const [prestamosList, setPrestamosList] = useState([]);
    const [librosDisponibles, setLibrosDisponibles] = useState([]);
    const [persona, setPersona] = useState("");
    const [libro, setLibro] = useState("");
    const [fechaPrestamo, setFechaPrestamo] = useState("");

    useEffect(() => {
        if (token) {
            getPrestamoList();
        }
    }, [])

    const getPrestamoList = async () => {
        try {
            const request = await api.get(`/prestamos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                setPrestamosList(request.data.result);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const getLibrosDisponibles = async () => {
        try {
            const request = await api.get(`/libros-disponibles`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                setLibrosDisponibles(request.data.result);
            } else {
                alert(request.data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleNuevo = async () => {
        try {
            const request = await api.post(`/crear-prestamo`,
                {
                    id_libro: libro, 
                    persona, 
                    fecha_prestamo: fechaPrestamo
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (request.data.success) {
                getPrestamoList();
                handleClose();

                setPersona("");
                setLibro("");
                setFechaPrestamo("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleClose = () => setShow(false);

    const handleShow = () => {
        getLibrosDisponibles();
        setShow(true);
    };
    return (
        <>
            <h1>Préstamos</h1>
            <div className='d-flex justify-content-end my-2'>
                <Button className='button-rosa' onClick={handleShow}>
                    <i className="bi bi-plus-lg"> Nuevo</i>
                </Button>

            </div>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo préstamo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Libro</Form.Label>
                            <Form.Select
                                value={libro}
                                onChange={(e) => setLibro(e.target.value)}>
                                <option>[Seleccione un libro]</option>
                                {librosDisponibles.map((libroD) => (
                                    <option
                                        key={libroD.id}
                                        value={libroD.id}
                                    >{libroD.titulo}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Persona</Form.Label>
                            <Form.Control
                                type="text"
                                value={persona}
                                onChange={(e) => setPersona(e.target.value)}
                                placeholder="Nombre y apellido"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha de préstamo</Form.Label>
                            <Form.Control
                                type="date"
                                value={fechaPrestamo}
                                onChange={(e) => setFechaPrestamo(e.target.value)}
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className='button-save' onClick={handleNuevo}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row xs={1} md={2} className="g-4">

                {prestamosList.length === 0 ? (
                    <p>No se han registrado préstamos todavía.</p>
                ) : (
                    prestamosList.map((prestamo) => (
                        <LibroPrestado
                            key={prestamo.id} prestamo={prestamo} getPrestamoList={getPrestamoList}
                        />
                    ))
                )}
            </Row>
        </>
    )
}