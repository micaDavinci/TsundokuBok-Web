import { Row, Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import { useAuth } from '../../context/AuthContext';
import { EstanteList } from './EstanteList'

import '../../App.css'

export const Biblioteca = () => {

    const { token } = useAuth();

    useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async () => {
        try {
            const request = await axios.get("http://localhost:8888/welcome", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h1>Biblioteca</h1>

            <div className='d-flex justify-content-end my-2'>
                <Button className='button-rosa' onClick={handleShow}>
                    <i class="bi bi-plus-lg"> Nuevo</i>
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
                    <Button className='button-save' onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className='g-3'>
                <EstanteList nombre="Fantasía" cantidad="8" />
                <EstanteList nombre="Ficción" cantidad="5" />
                <EstanteList nombre="Romance" cantidad="10" />
                <EstanteList nombre="ESI" cantidad="3" />
                <EstanteList nombre="Favoritos" cantidad="6" />
                <EstanteList nombre="Ebook" cantidad="20" />
                <EstanteList nombre="Clásicos" cantidad="4" />
            </Row>
        </>
    )
}