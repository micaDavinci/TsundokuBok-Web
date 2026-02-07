import { Link } from "react-router-dom"
import { Resultado } from "./Resultado"
import { Button, Form, Row } from "react-bootstrap"

export const BuscarLibro = () => {
    return (
        <>
            <h1 className='mb-4'>Buscar libro</h1>

            <Row md={3} lg={3}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Row>

            <Link to="/mi-biblioteca/nuevo-libro" className="d-flex justify-content-end mt-2">Volver</Link>

            <Row xs={3} md={4} className="g-3 mt-1">
                <Resultado />
                <Resultado />
                <Resultado />
                <Resultado />
                <Resultado />
                <Resultado />
            </Row>
        </>
    )
}