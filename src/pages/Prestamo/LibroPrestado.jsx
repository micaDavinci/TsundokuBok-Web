import { Badge, Card, Col, Row } from "react-bootstrap"

export const LibroPrestado = (props) => {
    return (
        <Col sm={12} md={6} lg={6}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Img src="../img/img.jpg" className="img-fluid p-1 rounded-start" />
                        </Col>
                        <Col>
                            <Card.Title className="color-rosaT">{props.titulo}</Card.Title>
                            <Card.Text className="color-rosaO">{props.autor}</Card.Text>
                            <Card.Title className="color-rosaT">{props.persona}</Card.Title>
                            <Card.Text className="color-rosaO">Fecha de préstamo: {props.fecha}</Card.Text>
                            <Card.Text className="color-verdeO">Estado: <Badge bg="secondary">{props.estado}</Badge></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}