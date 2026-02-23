import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";

export const AgregarLibro = () => {

    const { token } = useAuth();

    const [id_biblioteca, setIdUbicacion] = useState("");
    const [titulo, seTtitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [edicion, setEdicion] = useState("");
    const [paginas, setPaginas] = useState("");
    const [idioma, setIdioma] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [genero, setGenero] = useState("");
    const [portada, setPortada] = useState("");
    const [prioridad, setPriotidad] = useState("");
    const [estantes, setEstantes] = useState([]);

    const handleNuevo = async (e) => {
        e.preventDefault();

        try {
            const request = await api.post(`/nuevo-libro`, {
                id_biblioteca,
                titulo,
                autor,
                edicion,
                paginas,
                idioma,
                sinopsis,
                genero,
                portada,
                prioridad
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                alert("Libro agregado correctamente");
                navigate(`/mi-biblioteca/nuevo-libro`);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    // const getEstantes = async () => {
    //     try {
    //         const request = await api.get("/estantes", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         if (request.data.success) {
    //             setEstantes(request.data.result);
    //         } else {
    //             alert(request.data.message);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         alert("Ha surgido un error al recuperar los estantes, por favor intente más tarde");
    //     }
    // }

    // const [destino, setDestino] = useState("");      // valor del primer combo
    // const [opcionesSegundoCombo, setOpcionesSegundoCombo] = useState([]);
    // const [segundoValor, setSegundoValor] = useState("");

    // useEffect(() => {
    //     if (destino === "1") {
    //         // Biblioteca: mostramos los estantes
    //         getEstantes();
    //         setOpcionesSegundoCombo(estantes); 
    //     } else if (destino === "2") {
    //         // Lista de deseos: mostramos prioridades
    //         setOpcionesSegundoCombo([
    //             { id: "alta", nombre: "Alta" },
    //             { id: "media", nombre: "Media" },
    //             { id: "baja", nombre: "Baja" }
    //         ]);
    //     } else {
    //         setOpcionesSegundoCombo([]);
    //     }
    //     setSegundoValor(""); // reiniciamos el segundo combo cuando cambia el destino
    // }, [destino, estantes]);

    return (
        <>
            <h1 className='mb-4'>Agregar libro</h1>

            <Form onSubmit={handleNuevo}>
                <Row className="mb-4">
                    <Col sm={6} md={3} lg={3}>
                        <img src="../img/img.jpg" className="img-fluid p-1 rounded" />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control
                                type="file"
                                name="portada"
                                value={portada}
                                onChange={(e) => setPortada(e.target.value)} />
                        </Form.Group>
                    </Col>

                    <Col sm={6} md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Título"
                                name="titulo"
                                value={titulo}
                                onChange={(e) => seTtitulo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAutora">
                            <Form.Label>Autor/a</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Autor/a"
                                name="autor"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    {/* <Col>
                        <Form.Group className="mb-3" controlId="formDestino">
                            <Form.Label>Agregar a </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={destino}
                                onChange={(e) => setDestino(e.target.value)}
                            >
                                <option>[Seleccione el destino]</option>
                                <option value="1">Biblioteca</option>
                                <option value="2">Lista de deseos</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formEstante">
                            <Form.Label>
                                {destino === "2" ? "Prioridad" : "Estante"}
                            </Form.Label>

                            <Form.Select
                                value={segundoValor}
                                disabled={destino !=1 && destino != 2}
                                onChange={(e) => setSegundoValor(e.target.value)}>
                                <option>[Seleccione]</option>

                                {opcionesSegundoCombo.map((opciones) => (
                                    <option
                                        key={opciones.id}
                                        value={opciones.id_}
                                    >{opciones.nombre}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col> */}
                </Row>

                <Row className="mb-3">
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formEdicion">
                            <Form.Label>Edición</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Año"
                                name="edicion"
                                value={edicion}
                                onChange={(e) => setEdicion(e.target.value)} />
                        </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formPaginas">
                            <Form.Label>Cantidad de páginas</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Cantidad de páginas"
                                name="paginas"
                                value={paginas}
                                onChange={(e) => setPaginas(e.target.value)} />
                        </Form.Group>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formIdioma">
                            <Form.Label>Idioma</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Idioma"
                                name="idioma"
                                value={idioma}
                                onChange={(e) => setIdioma(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col sm={6} md={4} lg={4}>
                        <Form.Group className="mb-3" controlId="formGenero">
                            <Form.Label>Género/s</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Género/s"
                                name="genero"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Form.Group className="mb-3" controlId="formSinopsis">
                        <Form.Label>Sinópsis</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={8}
                            name="sinopsis"
                            value={sinopsis}
                            onChange={(e) => setSinopsis(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <div className="d-flex justify-content-end mt-4">
                    <Button as={Link} to="/mi-biblioteca/nuevo-libro" variant="secondary" className="px-5 mx-2">Cancelar</Button>
                    <Button type="submit" className="button-save px-5">Guardar</Button>
                </div>


            </Form>
        </>
    )
}