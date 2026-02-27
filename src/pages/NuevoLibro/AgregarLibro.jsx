import { Button, Col, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useParams } from "react-router-dom";
import { api } from "../../api/axios";

export const AgregarLibro = () => {

    const { token } = useAuth();
    const { id } = useParams();
    const [id_ubicacion, setIdUbicacion] = useState("");
    const navigate = useNavigate()

    const [titulo, seTtitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [edicion, setEdicion] = useState("");
    const [paginas, setPaginas] = useState("");
    const [idioma, setIdioma] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [genero, setGenero] = useState("");
    const [portadaFile, setPortadaFile] = useState(null);
    const [portadaGoogle, setPortadaGoogle] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [prioridad, setPriotidad] = useState("");
    const [destino, setDestino] = useState("");

    const [estantes, setEstantes] = useState([]);
    const [opcionesSegundoCombo, setOpcionesSegundoCombo] = useState([]);
    const [segundoValor, setSegundoValor] = useState("");

    const prioridades = [
        { id: "alta", nombre: "Alta" },
        { id: "media", nombre: "Media" },
        { id: "baja", nombre: "Baja" }
    ];


    useEffect(() => {
        const updateSegundoCombo = async () => {
            if (destino === "1") {
                // Biblioteca → mostrar estantes
                const est = await getEstantes();
                setOpcionesSegundoCombo(est);
            } else if (destino === "2") {
                // Lista de deseos → mostrar prioridades
                setOpcionesSegundoCombo(prioridades);
            } else {
                setOpcionesSegundoCombo([]);
            }
            setSegundoValor(""); // reiniciamos el segundo combo
        };

        updateSegundoCombo();
    }, [destino]);

    useEffect(() => {
        const cargarLibroDesdeGoogle = async () => {
            try {
                const res = await api.get(`/libro-buscado/${id}`);
                const data = res.data;
                const info = data.volumeInfo;
                const fecha = info.publishedDate || "";
                const anio = fecha.substring(0, 4);

                seTtitulo(info.title || "");
                setAutor(info.authors?.join(", ") || "");
                setPaginas(info.pageCount || "");
                setIdioma(info.language || "");
                setSinopsis(limpiarHTML(info.description || ""));
                setGenero(info.categories?.join(", ") || "");
                setEdicion(anio);
                setPortadaGoogle(info.imageLinks?.thumbnail || "");
                // setEdicion(info.publishedDate || "");

                // Imagen (solo preview, no archivo real)
                if (info.imageLinks?.thumbnail) {
                    setPreviewUrl(info.imageLinks.thumbnail);
                }

            } catch (error) {
                console.error("Error cargando libro:", error);
            }
        };

        if (id) {
            cargarLibroDesdeGoogle();
        }
    }, [id]);

    const getEstantes = async () => {
        try {
            const request = await api.get("/estantes", {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (request.data.success) {
                setEstantes(request.data.result);
                return request.data.result;
            } else {
                alert(request.data.message);
                return [];
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error al recuperar los estantes, por favor intente más tarde");
            return [];
        }
    };

    const handleNuevo = async (e) => {
        e.preventDefault();

        const payload = {
            titulo,
            autor,
            edicion,
            paginas,
            idioma,
            sinopsis,
            genero,
            portada: portadaFile,
            portadaGoogle,
            id_ubicacion: destino === "1" ? segundoValor : "",
            prioridad: destino === "2" ? segundoValor : null
        };

        try {
            const request = await api.post(`/nuevo-libro`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
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


    const handlePortadaChange = (e) => {
        const file = e.target.files[0];
        setPortadaFile(file);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file)); // previsualización
        } else {
            setPreviewUrl(null);
        }
    };

    const limpiarHTML = (html) => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || "";
    };

    return (
        <>
            <h1 className='mb-4'>Agregar libro</h1>

            <Form onSubmit={handleNuevo}>
                <Row className="mb-4">
                    <Col sm={6} md={3} lg={3}>
                        {previewUrl && (
                            <div className="mt-2">
                                <img src={previewUrl} alt="Portada" width="150" />
                            </div>
                        )}



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

                <Row className="mb-4">
                    <Col>
                        <Form.Group className="mb-3" controlId="formDestino">
                            <Form.Label>Agregar a </Form.Label>
                            <Form.Select
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
                                {destino === "2" ? "prioridad" : "ubicacion"}
                            </Form.Label>

                            <Form.Select
                                value={segundoValor}
                                disabled={destino != "1" && destino != "2"}
                                onChange={(e) => setSegundoValor(e.target.value)}
                            >
                                <option>[Seleccione]</option>

                                {opcionesSegundoCombo.map((opcion) => (
                                    <option
                                        key={opcion.id_estante ?? opcion.id} // si es prioridad no tendrá id_estante
                                        value={opcion.id_estante ?? opcion.id}
                                    >
                                        {opcion.nombre}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
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