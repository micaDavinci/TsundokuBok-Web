import { Link } from "react-router-dom"
import { Resultado } from "./Resultado"
import { Button, Form, Row } from "react-bootstrap"

export const BuscarLibro = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const buscarLibro = async () => {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setBooks(data.items || []);
    }
    return (
        <>
            <h1 className='mb-4'>Buscar libro</h1>

            <Row md={3} lg={3}>
                {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary"><i class="bi bi-search"></i></Button>
                </Form> */}

                <Input
                    type="text"
                    placeholder="Buscar un libro"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={{ padding: '0.5rem', width: '300px', marginRight: '1rem' }}>
                </Input>
                <Button variant="outline-secondary" onClick={buscarLibro}>
                    <i className="bi bi-search">Buscar</i>
                </Button>
            </Row>

            <Link to="/mi-biblioteca/nuevo-libro" className="d-flex justify-content-end mt-2 link-rosa"><i class="bi bi-chevron-left"> Volver</i></Link>

            <Row xs={3} md={4} className="g-3 mt-1">
                {books.map( book => (
                    <Resultado key={book.id} book={book.volumeInfo}/>
                ))};
            </Row>
        </>
    )
}