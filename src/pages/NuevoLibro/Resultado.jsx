import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Resultado = ({ book }) => {
    const { id, volumeInfo } = book;
    const { title, authors, imageLinks } = volumeInfo;
    return (
        <Col sm={4} md={3} lg={3}>
            <Card className="p-2 h-100 d-flex flex-column">
                <Link className="link-offset-2 link-underline link-underline-opacity-0 color-rosaT" to={`/mi-biblioteca/agregar-libro/${id}`}>
                    <Card.Img variant="top" src={imageLinks?.thumbnail} className="img-fluid rounded-start" style={{
                        height: "300px", objectFit: "contain"
                    }}></Card.Img>
                    <Card.Title className="mt-2">{title}</Card.Title>
                    <Card.Text> {authors?.join(", ")}</Card.Text>
                </Link>
            </Card>
        </Col>
    )
}