import { Badge, Card, Col, Row } from "react-bootstrap"

export const LibroDeseado = (props) => {
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
                            <Card.Text className="color-rosaO">{props.genero}</Card.Text>
                            <Card.Text className="color-rosaO">Prioridad: <Badge bg="secondary">{props.prioridad}</Badge></Card.Text>                  
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}