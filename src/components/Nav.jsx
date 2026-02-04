import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="md">
            <Container>
                <Button variant='outline-light'
                    className="d-md-none me-2"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                >
                    ☰
                </Button>

                <Navbar.Brand as={Link} to="/">
                    <img src="./img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                    <span className="color-rosaT"> Tsundoku</span>
                    <span className="color-verdeB">Bok</span>
                </Navbar.Brand>

                <Button as={Link} to="/login" className='justify-content-end bg-verdeO'>Inicio de sesión</Button>

            </Container>

        </Navbar>
    )
}