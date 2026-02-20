import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const EstanteList = (estante) => {
    return (
        <Col sm={6} md={3} lg={3}>
            <div className="p-3 rounded card-shadow">
                <Link className="link-offset-2 link-underline link-underline-opacity-0" to={`/mi-biblioteca/estante/${estante.id_estante}`} >
                    <Row>
                        <Col className="color-rosaO">{estante.nombre}</Col>
                        <Col className="text-end color-verdeO">Cant.: {estante.cantidad_libros}</Col>
                    </Row>
                </Link>
            </div>
        </Col>
    )
}