import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const AgregarLibro = () => {
    return (
        <>
            <h1 className='mb-4'>Agregar libro</h1>

            <Form>
                <Row className="mb-4">
                    <Col sm={6} md={3} lg={3}>
                        <img src="../img/img.jpg" className="img-fluid p-1 rounded" />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>

                    </Col>

                    <Col sm={6} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAutora">
                            <Form.Label>Autor/a</Form.Label>
                            <Form.Control type="text" placeholder="Autor/a" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Form.Group className="mb-3" controlId="formDestino">
                            <Form.Label>Agregar a </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>[Seleccione el destino]</option>
                                <option value="1">Biblioteca</option>
                                <option value="2">Lista de deseos</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formEstante">
                            <Form.Label>Estante </Form.Label>
                            <Form.Select aria-label="Default select example" disabled>
                                <option>[Seleccione un estante]</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formEdicion">
                            <Form.Label>Edición</Form.Label>
                            <Form.Control type="number" placeholder="Año" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formPaginas">
                            <Form.Label>Cantidad de páginas</Form.Label>
                            <Form.Control type="number" placeholder="Cantidad de páginas" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formIdioma">
                            <Form.Label>Idioma</Form.Label>
                            <Form.Control type="text" placeholder="Idioma" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formGenero">
                            <Form.Label>Género/s</Form.Label>
                            <Form.Control type="text" placeholder="Género/s" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Form.Group className="mb-3" controlId="formSinopsis">
                        <Form.Label>Sinópsis</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>

                <div className="d-flex justify-content-end mt-4">
                    <Button as={Link} to="/mi-biblioteca/nuevo-libro" variant="secondary" className="px-5 mx-2">Cancelar</Button>
                    <Button className="button-save px-5">Guardar</Button>
                </div>


            </Form>
        </>
    )
}