import { Row, Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react';
import '../../App.css'
import { LibroPrestado } from './LibroPrestado'

export const Prestamo = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <h1 className='color-rosaT mb-4'>Préstamos</h1>
            <div className='d-flex justify-content-end m-4'>
                <Button className='bg-rosaO' onClick={handleShow}>
                    Nuevo préstamo
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
                            <Form.Select>
                                <option value="1">Los juegos del hambre</option>
                                <option value="2">Una corte de rosas y espinas</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Persona</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Persona"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fecha de préstamo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="DD/MM/AAAA"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select>
                                <option value="1">Prestado</option>
                                <option value="2">Devuelto</option>
                            </Form.Select>
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
            
            <Row xs={1} md={2} className="g-4">
                <LibroPrestado titulo="Mi planta de naranja lima" autor="José Mauro de Vasconcelos" persona="Pedro Soto" fecha="05/05/2025" estado="Prestado" />
                <LibroPrestado titulo="Nosotras" autor="Florencia Salort" persona="Silvia Gonzalez" fecha="15/03/2025" estado="Devuelto" />
                <LibroPrestado titulo="Los juegos del hambre" autor="Suzanne Collins" persona="Evelyn Rudel" fecha="05/01/2025" estado="Devuelto" />
            </Row>
        </>
    )
}