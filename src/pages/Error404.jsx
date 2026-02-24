import { Container,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <Container className='public-layout'>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} lg={8} className="text-center">
                <h1>Lo sentimos, la página que estás buscando no existe o ha dejado de existir</h1>
                <Link to="/" className="link-rosa">Volver a la página de inicio</Link>
                </Col>
            </Row>            
            </Container>



    )
}