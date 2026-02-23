import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import { Button, Form, Modal } from "react-bootstrap"

export const AmigosList = ({ invitado, getInvitadosList }) => {
    const { token } = useAuth();
    const { id, nombre, email } = invitado;

    const [show, setShow] = useState(false);
    const [nuevoNombre, setNuevoNombre] = useState(nombre);

    const handleEditar = async (invitadoID) => {
        try {
            const request = await api.put(`/editar-invitado/${invitadoID}`,
                {
                    id,
                    nombre: nuevoNombre

                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (request.data.success) {
                getInvitadosList();
                handleClose();
                setNuevoNombre("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleEliminar = async (invitadoID) => {
        const confirmDelete = window.confirm(
            "Esta acción es irreversible ¿Está seguro/a de que desea eliminar a este/a amigo/a?"
        );

        if (!confirmDelete) return;

        try {
            const request = await api.delete(
                `/eliminar-invitado/${invitadoID}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (request.data.success) {
                getInvitadosList();
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{email}</td>
                <td>
                    <div className='d-flex align-items-center justify-content-end'>
                        <Button className='button-gris me-2' onClick={handleShow}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button className='button-rosa' onClick={() => handleEliminar(id)}>
                            <i className="bi bi-trash"></i>
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
                                name="nombre"
                                value={nuevoNombre}
                                onChange={(e) => setNuevoNombre(e.target.value)}
                                placeholder={nombre}
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailInput">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder={email}
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
                    <Button className="button-save" onClick={() => handleEditar(id)}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}