import { Link } from "react-router-dom"
import { Button, Row } from "react-bootstrap"
import { useState } from 'react';
import { api } from "../../api/axios";

import { Resultado } from "./Resultado"
export const BuscarLibro = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const buscarLibro = async () => {
    try {
        const res = await api.get("/buscar-libros", {
            params: { q: query }
        });

        setBooks(res.data); // axios ya lo parsea
    } catch (error) {
        console.error(error);
    }
};
    return (
        <>
            <h1 className='mb-4'>Buscar libro</h1>
            <Link to="/mi-biblioteca/nuevo-libro" className="d-flex justify-content-end mt-2 link-rosa"><i className="bi bi-chevron-left"> Volver</i></Link>
            <Row md={3} lg={3}>

                <input
                    type="text"
                    placeholder="Buscar un libro"
                    className="me-2 rounded"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <Button variant="outline-secondary" onClick={buscarLibro}>
                    <i className="bi bi-search"> Buscar</i>
                </Button>
            </Row>

            <Row xs={3} md={4} className="g-3 mt-1">
                {books.map(book => (
                    <Resultado key={book.id} book={book} />
                ))}
            </Row>
        </>
    )
}