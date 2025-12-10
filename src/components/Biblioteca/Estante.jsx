import '../../App.css'
import { Libro } from './Libro'

export const Estante = (props) => {
    return(
        <>
        <h1 className='color-rosaT'>Estante</h1>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="color-rosaO" href="#">Biblioteca</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>

        <div className='row'>
            <Libro titulo="Amanecer en la cosecha" autor="Suzanne Collins" estado="Leído" valor="★★★★★"/>
            <Libro titulo="Ruina y ascenso" autor="Leigh Bardugo" estado="Empezado" valor="☆☆☆☆☆"/>
            <Libro titulo="Cumbres borrascosas" autor="Emily Brontë" estado="TBR" valor="☆☆☆☆☆"/>
        </div>
        </>
    )
}

