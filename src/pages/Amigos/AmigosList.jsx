import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"

export const AmigosList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <tr>
                <td>Nombre Apellido</td>
                <td>email@gmail.com</td>
                <td>
                    <div className='d-flex align-items-center justify-content-end'>
                        <Button className='button-gris me-2' onClick={handleShow}>
                            <i class="bi bi-pencil-square"></i>
                        </Button>
                        <Button className='button-rosa'>
                            <i class="bi bi-trash"></i>
                        </Button>

                    </div>

                </td>
            </tr>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar amigo/a</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="nombreInput">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre Apellido" // Nombre completo
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailInput">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email@gmail.com" // Email del amigo
                                autoFocus
                                disabled
                            />
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
        </>
    )

}