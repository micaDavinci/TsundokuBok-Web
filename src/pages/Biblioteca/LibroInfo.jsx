import { Badge, Row, Col, Accordion, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const LibroInfo = () => {
    const { id } = useParams();
    const { token } = useAuth();

    const [LibroInfo, setLibroInfo] = useState([]);

    useEffect(() => {
        if (token) {
            getLibro();
        }
    }, [])

    const getLibro = async () => {
        try {
            const request = await api.get(`/ver-libro/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                setLibroInfo(request.data.result[0]);
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
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <Link to={`/mi-biblioteca/estante/${LibroInfo.codigo_estante}`} className="link-rosa"><i className="bi bi-chevron-left"> Volver</i></Link>
                <Button as={Link} to={`/mi-biblioteca/editar-libro/${LibroInfo.id_libro}`} className='button-gris me-4'>
                    <i className="bi bi-pencil-square"> Editar</i>
                </Button>
            </div>

            {/* Información general */}
            <Row className="mb-4">
                <Col sm={12} md={3} lg={3}>
                    <img src="../img/img.jpg" className="img-fluid p-1 rounded" />
                </Col>

                <Col sm={12} md={9} lg={9}>
                    <h1>{LibroInfo.titulo}</h1>
                    <h2 className="color-rosaO">{LibroInfo.autor}</h2>
                    <Row>
                        <Col sm={6} md={12} lg={12} className="pt-3">
                            <Badge bg="secondary">{LibroInfo.estado}</Badge>
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
                            <p className="ps-4 color-rosaT">{LibroInfo.formato}</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Reseña</h4>
                            <p className="ps-4 color-rosaT">{LibroInfo.opinion}</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Notas adicionales</h4>
                            <p className="ps-4 color-rosaT">{LibroInfo.nota}</p>
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
                                <p className="ps-4 color-rosaT">{LibroInfo.edicion}</p>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <h4 className="color-verdeO">Idioma</h4>
                                <p className="ps-4 color-rosaT">{LibroInfo.idioma}</p>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <h4 className="color-verdeO">Cantidad de páginas</h4>
                                <p className="ps-4 color-rosaT">{LibroInfo.paginas}</p>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="color-verdeO">Género/s</h4>
                            <p className="ps-4 color-rosaT">{LibroInfo.genero}</p>
                        </Row>
                        <Row className="mb-3">
                            <h4 className="color-verdeO">Sinópsis</h4>
                            <p className="ps-4 color-rosaT">{LibroInfo.sinopsis}</p>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}