import '../../App.css'
import { LibroPrestado } from './LibroPrestado'

export const Prestamo = (props) => {
    return(
        <>
        <h1 className='color-rosaT'>Préstamos</h1>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            </ol>
        </nav>

        <div className='row'>
            <LibroPrestado titulo="Mi planta de naranja lima" autor="José Mauro de Vasconcelos" persona="Pedro Soto" fecha="05/05/2025" estado="Prestado"/>
            <LibroPrestado titulo="Nosotras" autor="Florencia Salort" persona="Silvia Gonzalez" fecha="15/03/2025" estado="Devuelto"/>
            <LibroPrestado titulo="Los juegos del hambre" autor="Suzanne Collins" persona="Evelyn Rudel" fecha="05/01/2025" estado="Devuelto"/>
        </div>
        </>
    )
}