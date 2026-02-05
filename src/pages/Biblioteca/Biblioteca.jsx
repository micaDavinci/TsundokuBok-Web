import { Row, Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react';
import '../../App.css'
import { EstanteList } from './EstanteList'

export const Biblioteca = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h1 className='color-rosaT'>Biblioteca</h1>

            <div className='d-flex justify-content-end m-4'>
                <Button className='bg-rosaO' onClick={handleShow}>
                    Nuevo estante
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
                    <Button variant="primary" onClick={handleClose}>
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