import { Navbar, Container, Button, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

export const Nav = ({ onMenuOpen }) => {

    const { logueado, logout } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <Navbar bg='dark' variant='dark' expand="md">
            <Container>
                <Button variant='outline-light'
                    className="d-md-none"
                    onClick={onMenuOpen}
                >
                    <i className="bi bi-list"></i>
                </Button>

                <Navbar.Brand as={Link} to="/">
                    <img src="../img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                    <span className="color-rosaT"> Tsundoku</span>
                    <span className="color-verdeB">Bok</span>
                </Navbar.Brand>

                {
                    (logueado)
                        ?
                        <Button className='justify-content-end button-verde' onClick={handleLogout}>Cerrar sesión</Button>
                        :
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
                }

            </Container>

        </Navbar>
    )
}