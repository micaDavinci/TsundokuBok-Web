import { Offcanvas, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Menu = ({ show, onClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      responsive="md"
      placement="start"
      style={{ width: 240 }}
    >
      <Offcanvas.Header closeButton className="d-md-none">
        <Offcanvas.Title className="color-rosaO">Menú</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="p-0">
        <Nav className="flex-column p-2 gap-2">
          <Nav.Link as={Link} to="/mi-biblioteca/biblioteca" className="align-items-center color-rosaT">Biblioteca</Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/nuevo-libro" className="align-items-center color-rosaT">Nuevo libro</Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/lista-de-deseos" className="align-items-center color-rosaT">Lista de deseos</Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/prestamos" className="align-items-center color-rosaT">Préstamos</Nav.Link>
        </Nav>
      </Offcanvas.Body>

    </Offcanvas>
  )
}
