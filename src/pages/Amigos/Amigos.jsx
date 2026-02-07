import { Form, Row, Col, Button, Card, Tab, Table } from "react-bootstrap"
import { AmigosList } from "./AmigosList"

export const Amigos = () => {
    return (
        <>
            <h1 className="mb-4 pb-4">Nuevo/a amigo/a</h1>
            <Card className="card-shadow">
                <Card.Body>
                    <Form>
                        <Row className="d-flex align-items-center">
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group className="mb-3" controlId="nombreInput">
                                    <Form.Label>Nombre completo</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" />
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={4} lg={4}>
                                <Form.Group className="mb-3" controlId="emailInput">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={4} lg={4}>
                                <Button variant="primary" className="px-5">Guardar</Button>
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
                    <AmigosList />
                    <AmigosList />
                    <AmigosList />
                    <AmigosList />
                    <AmigosList />
                </thead>
            </Table>



        </>
    )
}