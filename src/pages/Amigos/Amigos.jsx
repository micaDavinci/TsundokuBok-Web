import { Form, Row, Col, Button, Card, Tab, Table } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

import { AmigosList } from "./AmigosList"

export const Amigos = () => {
    const { token } = useAuth();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [invitadosList, setInvitadosList] = useState([]);

    useEffect(() => {
        if (token) {
            getInvitadosList();
        }
    }, [])

    const getInvitadosList = async () => {
        try {
            const request = await api.get(`invitados`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (request.data.success) {
                setInvitadosList(request.data.result);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleNuevo = async (e) => {
        e.preventDefault();

        try {
            const request = await api.post(`/crear-invitado`,
                {
                    email, nombre
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (request.data.success) {
                getInvitadosList();
                setNombre("");
                setEmail("");
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    return (
        <>
            <h1 className="mb-4 pb-4">Nuevo/a amigo/a</h1>
            <Card className="card-shadow">
                <Card.Body>
                    <Form onSubmit={handleNuevo}>
                        <Row className="d-flex align-items-center">
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group className="mb-3" controlId="nombreInput">
                                    <Form.Label>Nombre completo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Nombre y apellido"
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={4} lg={4}>
                                <Form.Group className="mb-3" controlId="emailInput">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={4} lg={4}>
                                <Button type="submit" className="button-save px-5 mt-2">Guardar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            <Table striped className="mt-5">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {invitadosList.length === 0 ? (
                        <tr>
                            No se han registrado préstamos todavía.
                        </tr>
                    ) : (
                        invitadosList.map((invitado) => (
                            <AmigosList
                                key={invitado.id} invitado={invitado} getInvitadosList={getInvitadosList}
                            />
                        ))
                    )}
                </tbody>
            </Table>



        </>
    )
}