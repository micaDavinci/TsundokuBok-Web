import { Offcanvas, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext';
import { api } from "../api/axios";
import { useEffect } from 'react';

export const Menu = ({ show, onClose }) => {

  const { token } = useAuth();

    useEffect(() => {
        if (token) {
        getWelcome();
    }
    }, []);

    const getWelcome = async () => {
        try {
            const request = await api.get("http://localhost:8888/welcome", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

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
          <Nav.Link as={Link} to="/mi-biblioteca/biblioteca" className="align-items-center color-rosaT link-nav"><i class="bi bi-book-half"> Biblioteca</i></Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/nuevo-libro" className="align-items-center color-rosaT link-nav"><i class="bi bi-journal-plus"> Nuevo libro</i></Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/prestamos" className="align-items-center color-rosaT link-nav"><i class="bi bi-calendar2-check"> Préstamos</i></Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/lista-de-deseos" className="align-items-center color-rosaT link-nav"><i class="bi bi-list-ul"> Lista de deseos</i></Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/amigos" className="align-items-center color-rosaT link-nav"><i class="bi bi-people-fill"> Mis amigos</i></Nav.Link>
          <Nav.Link as={Link} to="/mi-biblioteca/invitado" className="align-items-center color-rosaT link-nav"><i class="bi bi-person-heart"> Invitado</i></Nav.Link>
        </Nav>
      </Offcanvas.Body>

    </Offcanvas>
  )
}
