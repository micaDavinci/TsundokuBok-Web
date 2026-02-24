import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Resultado = (book) => {
     const { title, authors, imageLinks, description, infoLink } = book;
    return (
        <Col sm={4} md={3} lg={3}>
            <Card className="p-2">
                <Link className="link-offset-2 link-underline link-underline-opacity-0 color-rosaT" to="/mi-biblioteca/agregar-libro">
                    <Card.Img variant="top" src={imageLinks.thumbnail} className="img-fluidrounded-start"></Card.Img>
                    <Card.Title className="mt-2">{title}</Card.Title>
                    <Card.Text>{authors?.join(', ')}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Link to={infoLink}> Ver más</Link>

                </Link>
            </Card>
        </Col>
    )
}