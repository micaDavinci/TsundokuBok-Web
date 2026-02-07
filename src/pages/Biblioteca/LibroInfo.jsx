import { Badge, Row, Col, Accordion, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LibroInfo = () => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <Link to="/mi-biblioteca/estante" className="link-rosa"><i class="bi bi-chevron-left"> Volver</i></Link>
                <Button as={Link} to="/mi-biblioteca/editar-libro" className='button-gris me-4'>
                    <i class="bi bi-pencil-square"> Editar</i>
                </Button>
            </div>
            
            {/* Información general */}
            <Row className="mb-4">
                <Col sm={12} md={3} lg={3}>
                    <img src="../img/img.jpg" className="img-fluid p-1 rounded" />
                </Col>

                <Col sm={12} md={9} lg={9}>
                    <h1>Título</h1>
                    <h2 className="color-rosaO">Autor</h2>
                    <Row>
                        <Col sm={6} md={12} lg={12}>
                            <h3 className="color-verdeO">★★★★★</h3>
                        </Col>
                        <Col sm={6} md={12} lg={12} className="pt-3">
                            <Badge bg="secondary">Estado</Badge>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                {/* Sección de reseña */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reseña</Accordion.Header>
                    <Accordion.Body>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Fecha de lectura</h4>
                            <Col><p className="ps-4 color-rosaT">Fecha de inicio: DD/MM/AAAA</p></Col>
                            <Col><p className="color-rosaT">Fecha de Fin: DD/MM/AAAA</p></Col>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Formato</h4>
                            <p className="ps-4 color-rosaT">Físico</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Reseña</h4>
                            <p className="ps-4 color-rosaT">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Notas adicionales</h4>
                            <p className="ps-4 color-rosaT">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!</p>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Sección de información general */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Información</Accordion.Header>
                    <Accordion.Body>
                        <Row className="mb-3">
                            <Col sm={6} md={4} lg={4}>
                                <h4 className="color-verdeO">Edición</h4>
                                <p className="ps-4 color-rosaT">AAAA</p>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <h4 className="color-verdeO">Idioma</h4>
                                <p className="ps-4 color-rosaT">Español</p>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <h4 className="color-verdeO">Cantidad de páginas</h4>
                                <p className="ps-4 color-rosaT">1500</p>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="color-verdeO">Género/s</h4>
                            <p className="ps-4 color-rosaT">Ficción-Novela-Literatura fanstástica</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Sinópsis</h4>
                            <p className="ps-4 color-rosaT">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi cumque porro natus? Dolor quis at magnam labore exercitationem dicta tempora placeat tenetur, blanditiis vero rerum voluptates quasi cum. Quis!</p>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}