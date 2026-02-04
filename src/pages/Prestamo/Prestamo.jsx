import { Row } from 'react-bootstrap'
import '../../App.css'
import { LibroPrestado } from './LibroPrestado'

export const Prestamo = (props) => {
    return (
        <>
            <h1 className='color-rosaT mb-4'>Préstamos</h1>

            <Row xs={1} md={2} className="g-4">
                <LibroPrestado titulo="Mi planta de naranja lima" autor="José Mauro de Vasconcelos" persona="Pedro Soto" fecha="05/05/2025" estado="Prestado" />
                <LibroPrestado titulo="Nosotras" autor="Florencia Salort" persona="Silvia Gonzalez" fecha="15/03/2025" estado="Devuelto" />
                <LibroPrestado titulo="Los juegos del hambre" autor="Suzanne Collins" persona="Evelyn Rudel" fecha="05/01/2025" estado="Devuelto" />
            </Row>
        </>
    )
}