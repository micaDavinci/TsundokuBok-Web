import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LibroList = (props) => {
    return (
        <Col>
                <Link to="/mi-biblioteca/libro" className="link-offset-2 link-underline link-underline-opacity-0">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Img src="../img/img.jpg" className="img-fluid p-1 rounded-start" />
                                </Col>
                                <Col>
                                    <Card.Title className="color-rosaT">{props.titulo}</Card.Title>
                                    <Card.Text className="color-rosaO">{props.autor}</Card.Text>
                                    <Card.Text className="color-verdeB">{props.valor}</Card.Text>
                                    <Badge bg="secondary">{props.estado}</Badge>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>
        </Col>
    )
}