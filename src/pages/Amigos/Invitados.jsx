import { Row } from "react-bootstrap"
import { LibroDeseado } from "../wishList/LibroDeseado"

export const Invitados = () => {
    return(
        <>
        <h1>BiblioMica</h1>
        <h2>Lista de deseos de Mica</h2>

        <Row xs={1} md={2} className="g-4 mt-4">
                <LibroDeseado titulo="Imperio de tormentas" autor="Sarah J. Maas" prioridad="ALTA" genero="Literatura fantástica" />
                <LibroDeseado titulo="Caraval" autor="Stephanie Garber" prioridad="MEDIA" genero="Novela" />
                <LibroDeseado titulo="Asesino de brujas" autor="Shelby Mahurin" prioridad="BAJA" genero="Literatura fantástica" />
            </Row>
        </>
    )
}