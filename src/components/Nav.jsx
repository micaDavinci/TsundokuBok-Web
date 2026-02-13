import { Navbar, Container, Button, Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Nav = ({ onMenuOpen }) => {
    return (
        <Navbar bg='dark' variant='dark' expand="md">
            <Container>
                <Button variant='outline-light'
                    className="d-md-none"
                    onClick={onMenuOpen}
                >
                    <i class="bi bi-list"></i>
                </Button>

                <Navbar.Brand as={Link} to="/">
                    <img src="../img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                    <span className="color-rosaT"> Tsundoku</span>
                    <span className="color-verdeB">Bok</span>
                </Navbar.Brand>

                {/* <Button as={Link} to="/login" className='justify-content-end button-verde'>Iniciar sesión</Button> */}
                <Dropdown>
                    <Dropdown.Toggle className='justify-content-end button-verde'>
                        Iniciar sesión
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link to="/login" className='link-rosa'>Lector</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="" className='link-rosa'>Invitado</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>

        </Navbar>
    )
}