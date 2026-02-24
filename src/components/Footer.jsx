import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="py-4 py-md-5 mt-5 bg-body-tertiary">
            <Container className="py-4 py-md-5 text-body-secondary">
                <Row>
                    <Col md={4} lg={4} className="mb-3">
                        <Link to="/" className="d-flex align-items-center text-decoration-none">
                            <img src="../img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                            <span className="fs-5 color-rosaT"> Tsundoku</span>
                            <span className="fs-5 color-verdeB">Bok</span>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}