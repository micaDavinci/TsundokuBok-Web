import { Link } from "react-router-dom"
import '../../App.css'
import { LibroList } from "./LibroList"


export const Estante = (props) => {
    return(
        <>
        <h1 className='color-rosaT'>Estante</h1> {/* Nombre del estante */}
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/mi-biblioteca/biblioteca" className="color-rosaO">Biblioteca</Link>
                    {/* <a className="color-rosaO" href="#">Biblioteca</a> */}
                    </li>
                <li className="breadcrumb-item active" aria-current="page">Estante</li> {/* Nombre del estante */}
            </ol>
        </nav>

        <div className='row'>
            <LibroList titulo="Amanecer en la cosecha" autor="Suzanne Collins" estado="Leído" valor="★★★★★"/>
            <LibroList titulo="Ruina y ascenso" autor="Leigh Bardugo" estado="Empezado" valor="☆☆☆☆☆"/>
            <LibroList titulo="Cumbres borrascosas" autor="Emily Brontë" estado="TBR" valor="☆☆☆☆☆"/>
        </div>
        </>
    )
}

