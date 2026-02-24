import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Resultado = () => {
    return (
        <Col sm={4} md={3} lg={3}>
            <Card className="p-2">
                <Link className="link-offset-2 link-underline link-underline-opacity-0 color-rosaT" to="/mi-biblioteca/agregar-libro">
                    <Card.Img variant="top" src="../img/img.jpg" className="img-fluidrounded-start"></Card.Img>
                    <Card.Title className="mt-2">Título</Card.Title>
                </Link>
            </Card>
        </Col>
    )
}