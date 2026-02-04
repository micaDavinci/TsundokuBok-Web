import { Link } from "react-router-dom"
import '../../App.css'
import { LibroList } from "./LibroList"
import { Breadcrumb, BreadcrumbItem, Row } from "react-bootstrap"


export const Estante = (props) => {
    return (
        <>
            <h1 className='color-rosaT'>Estante</h1> {/* Nombre del estante */}

            <Breadcrumb>
                <BreadcrumbItem className="color-rosaO">
                    <Link to="/mi-biblioteca/biblioteca" className="color-rosaO">Biblioteca</Link>
                </BreadcrumbItem>
                <Breadcrumb.Item active>Estante</Breadcrumb.Item> {/* Nombre del estante */}
            </Breadcrumb>

            <Row xs={1} md={2} className="g-4">
                <LibroList titulo="Amanecer en la cosecha" autor="Suzanne Collins" estado="Leído" valor="★★★★★" />
                <LibroList titulo="Ruina y ascenso" autor="Leigh Bardugo" estado="Empezado" valor="☆☆☆☆☆" />
                <LibroList titulo="Cumbres borrascosas" autor="Emily Brontë" estado="TBR" valor="☆☆☆☆☆" />
            </Row>

        </>
    )
}

