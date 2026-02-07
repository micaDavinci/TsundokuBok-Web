import { Col, Form, Row, Accordion, Button, FloatingLabel } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LibroEdit = () => {
    return (
        <>
            <h1 className="mb-4">Editar libro</h1>
            <Form>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formAutora">
                            <Form.Label>Autor/a</Form.Label>
                            <Form.Control type="text" placeholder="Autor/a" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Portada</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                </Row>

                <Accordion defaultActiveKey={['0']} alwaysOpen>

                    {/* Edición de reseña */}
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Reseña</Accordion.Header>
                        <Accordion.Body>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formFecha">
                                    <Form.Label>Fecha de lectura</Form.Label>
                                </Form.Group>
                                <Col>
                                    <FloatingLabel controlId="flotingFechaInicio" label="Fecha de inicio">
                                        <Form.Control size="sm" type="text" placeholder="DD/MM/AAAA" />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="flotingFechaFin" label="Fecha de fin">
                                        <Form.Control size="sm" type="text" placeholder="DD/MM/AAAA" />
                                    </FloatingLabel>
                                </Col>
                                <Form.Check
                                    type="switch"
                                    id="switchTerminado"
                                    label="Marcar como terminado"
                                    className="my-3 ms-4"
                                />
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formReseña">
                                    <Form.Label>Valoración</Form.Label>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3 ms-4">
                                            <Form.Check
                                                inline
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                name="group3"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                            <Form.Check
                                                inline
                                                name="group4"
                                                type={type}
                                                id={`inline-${type}-4`}
                                            />
                                            <Form.Check
                                                inline
                                                name="group5"
                                                type={type}
                                                id={`inline-${type}-5`}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formFormato">
                                    <Form.Label>Formato</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Físico</option>
                                        <option value="2">Ebook</option>
                                        <option value="3">Audio libro</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formReseña">
                                    <Form.Label>Reseña</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formNotas">
                                    <Form.Label>Notas adicionales</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Edición de información general */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Información</Accordion.Header>
                        <Accordion.Body>
                            <Row className="mb-3">
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="formEdicion">
                                        <Form.Label>Edición</Form.Label>
                                        <Form.Control type="number" placeholder="Año" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="formIdioma">
                                        <Form.Label>Idioma</Form.Label>
                                        <Form.Control type="text" placeholder="Idioma" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="formPaginas">
                                        <Form.Label>Cantidad de páginas</Form.Label>
                                        <Form.Control type="number" placeholder="Cantidad de páginas" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="formGenero">
                                    <Form.Label>Género/s</Form.Label>
                                    <Form.Control type="number" placeholder="Genero/s" />
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formSinopsis">
                                    <Form.Label>Sinópsis</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="d-flex justify-content-end mt-4">
                    <Button as={Link} to="/mi-biblioteca/libro" variant="secondary" className="px-5 mx-2">Cancelar</Button>
                    <Button className="button-save px-5">Guardar</Button>
                </div>

            </Form>

        </>
    )
}