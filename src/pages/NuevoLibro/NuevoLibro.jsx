import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NuevoLibro = () => {
    return(
        <>
            <h1 className='mb-4'>Nuevo libro</h1>
            <Row>
                <Col sm={12} md={4} lg={4} className="d-grid gap-2 my-4">
                    <Button as={Link} to="/mi-biblioteca/buscar-libro" className="py-3">Búscar</Button>
                </Col>
                <Col sm={12} md={4} lg={4} className="d-grid gap-2 my-4">
                    <Button as={Link} to="/mi-biblioteca/agregar-libro" className="py-3">Agregar manualmente</Button>
                </Col>
            </Row>
        </>
    )
}