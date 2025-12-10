import '../../App.css'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import { Estanteria } from './Estanteria'

export const Biblioteca = () => {
    return(
        <>
            <h1 className='color-rosaT'>Biblioteca</h1>
            <div className='row'>
                <Estanteria nombre="Fantasía" cantidad="8"/>
                <Estanteria nombre="Ficción" cantidad="5"/>
                <Estanteria nombre="Romance" cantidad="10"/>
                <Estanteria nombre="ESI" cantidad="3"/>
                <Estanteria nombre="Favoritos" cantidad="6"/>
                <Estanteria nombre="Ebook" cantidad="20"/>
                <Estanteria nombre="Clásicos" cantidad="4"/>
            </div>
        </>
    )
}