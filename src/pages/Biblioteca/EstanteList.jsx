import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const EstanteList = (props) => {
    return (
        <Col sm={6} md={3} lg={3}>
            <div className="bg-grisO p-3 rounded">
                <Link className="link-offset-2 link-underline link-underline-opacity-0" to="/mi-biblioteca/estante" >
                    <Row>
                        <Col className="color-rosaO">{props.nombre}</Col>
                        <Col className="text-end color-verdeO">Cant.: {props.cantidad}</Col>
                    </Row>
                </Link>
            </div>
        </Col>
    )
}