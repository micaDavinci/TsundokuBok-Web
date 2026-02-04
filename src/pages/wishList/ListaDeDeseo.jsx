import '../../App.css'
import { LibroDeseado } from './LibroDeseado'

export const ListaDeDeseo = (props) => {
    return(
        <>
        <h1 className='color-rosaT mb-4'>Lista de deseos</h1>

        <div className='row'>
            <LibroDeseado titulo="Imperio de tormentas" autor="Sarah J. Maas" prioridad="ALTA" genero="Literatura fantástica"/>
            <LibroDeseado titulo="Caraval" autor="Stephanie Garber" prioridad="MEDIA" genero="Novela"/>
            <LibroDeseado titulo="Asesino de brujas" autor="Shelby Mahurin" prioridad="BAJA" genero="Literatura fantástica"/>
        </div>
        </>
    )
}