import { Col, Form, Row, Accordion, Button, FloatingLabel } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const LibroEdit = () => {
    const { id } = useParams();
    const { token } = useAuth();
    const navigate = useNavigate();
    const [portada, setPortada] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [formData, setformData] = useState({
        titulo: "",
        autor: "",
        formato: "",
        opinion: "",
        nota: "",
        edicion: "",
        idioma: "",
        paginas: "",
        genero: "",
        sinopsis: "",
        inicio: "",
        fin: ""
    });

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
                const libro = request.data.result[0]
                setformData({
                    titulo: libro.titulo ?? "",
                    autor: libro.autor ?? "",
                    formato: libro.formato ?? "",
                    opinion: libro.opinion ?? "",
                    nota: libro.nota ?? "",
                    edicion: libro.edicion ?? "",
                    idioma: libro.idioma ?? "",
                    paginas: libro.paginas ?? "",
                    genero: libro.genero ?? "",
                    sinopsis: libro.sinopsis ?? "",
                    fin: libro.fin ?? "",
                    inicio: libro.inicio ?? "",
                });
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleEditar = async () => {
        try {
            const form = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value);
            });

            if (portada) {
                form.append('portada', portada);
            }

            const request = await api.put(`/editar-libro/${id}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (request.data.success) {
                alert("Libro actualizado correctamente");
                navigate(`/mi-biblioteca/libro/${id}`);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePortadaChange = (e) => {
        const file = e.target.files[0];
        setPortada(file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file)); // previsualización
        } else {
            setPreviewUrl(null);
        }
    };

    return (
        <>
            <h1 className="mb-4">Editar libro</h1>
            <Form>

                <Row className="mb-4">
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Título"
                                value={formData.titulo}
                                name="titulo"
                                onChange={handlePortadaChange} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formAutora">
                            <Form.Label>Autor/a</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Autor/a"
                                value={formData.autor}
                                name="autor"
                                onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group controlId="formPortada">
                            <Form.Label>Portada</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handlePortadaChange}
                            />
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
                                        <Form.Control
                                            size="sm"
                                            type="date"
                                            value={formData.inicio}
                                            onChange={(e) => setformData({ ...formData, inicio: e.target.value || null })}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="flotingFechaFin" label="Fecha de fin">
                                        <Form.Control
                                            size="sm"
                                            type="date"
                                            value={formData.fin}
                                            onChange={(e) => setformData({ ...formData, fin: e.target.value || null })}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formFormato">
                                    <Form.Label>Formato</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>[Seleccionar]</option>
                                        <option value="1">Físico</option>
                                        <option value="2">Ebook</option>
                                        <option value="3">Audio libro</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formReseña">
                                    <Form.Label>Reseña</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        value={formData.opinion}
                                        name="opinion"
                                        onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formNotas">
                                    <Form.Label>Notas adicionales</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        value={formData.nota}
                                        name="nota"
                                        onChange={handleChange} />
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
                                        <Form.Control
                                            type="number"
                                            placeholder="Año"
                                            value={formData.edicion}
                                            name="edicion"
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="formIdioma">
                                        <Form.Label>Idioma</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Idioma"
                                            value={formData.idioma}
                                            name="idioma"
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="formPaginas">
                                        <Form.Label>Cantidad de páginas</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Cantidad de páginas"
                                            value={formData.paginas}
                                            name="paginas"
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="formGenero">
                                    <Form.Label>Género/s</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Genero/s"
                                        value={formData.genero}
                                        name="genero"
                                        onChange={handleChange} />
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formSinopsis">
                                    <Form.Label>Sinópsis</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        value={formData.sinopsis}
                                        name="sinopsis"
                                        onChange={handleChange} />
                                </Form.Group>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="d-flex justify-content-end mt-4">
                    <Button as={Link} to={`/mi-biblioteca/libro/${id}`} variant="secondary" className="px-5 mx-2">Cancelar</Button>
                    <Button className="button-save px-5" onClick={handleEditar}>Guardar</Button>
                </div>

            </Form>

        </>
    )
}