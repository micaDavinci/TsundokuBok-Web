import { Breadcrumb, BreadcrumbItem, Row, Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from "react-router-dom"
import '../../App.css'
import { LibroList } from "./LibroList"

export const Estante = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>Estante</h1> {/* Nombre del estante */}
                <Button className='bg-grisO me-4' onClick={handleShow}>
                    ✏️
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
                                placeholder="Nombre de estante" // Nombre de estante
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

            <Breadcrumb>
                <BreadcrumbItem className="color-rosaO">
                    <Link to="/mi-biblioteca/biblioteca" className="color-rosaO">Biblioteca</Link>
                </BreadcrumbItem>
                <Breadcrumb.Item active>Estante</Breadcrumb.Item> {/* Nombre del estante */}
            </Breadcrumb>

            <Row xs={1} md={2} className="g-4">
                <LibroList titulo="Amanecer en la cosecha" autor="Suzanne Collins" estado="Leído" valor="★★★★★" />
                <LibroList titulo="Ruina y ascenso" autor="Leigh Bardugo" estado="Empezado" valor="☆☆☆☆☆" />
                <LibroList titulo="Cumbres borrascosas" autor="Emily Brontë" estado="TBR" valor="☆☆☆☆☆" />
            </Row>

        </>
    )
}

