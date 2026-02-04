import { Row } from 'react-bootstrap'
import '../../App.css'
import { EstanteList } from './EstanteList'

export const Biblioteca = () => {
    return (
        <>
            <h1 className='color-rosaT mb-4'>Biblioteca</h1>
            <Row className='g-3'>
                <EstanteList nombre="Fantasía" cantidad="8" />
                <EstanteList nombre="Ficción" cantidad="5" />
                <EstanteList nombre="Romance" cantidad="10" />
                <EstanteList nombre="ESI" cantidad="3" />
                <EstanteList nombre="Favoritos" cantidad="6" />
                <EstanteList nombre="Ebook" cantidad="20" />
                <EstanteList nombre="Clásicos" cantidad="4" />
            </Row>
        </>
    )
}