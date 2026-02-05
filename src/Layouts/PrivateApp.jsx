import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import '../index.css'

import { Menu } from '../components/Menu'
import { Biblioteca } from '../pages/Biblioteca/Biblioteca'
import { Estante } from '../pages/Biblioteca/Estante'
import { ListaDeDeseo } from '../pages/wishList/ListaDeDeseo'
import { Prestamo } from '../pages/Prestamo/Prestamo'
import { LibroInfo } from '../pages/Biblioteca/LibroInfo'
import { LibroEdit } from '../pages/Biblioteca/LibroEdit'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export const PrivateApp = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (

        <>
            <Nav onMenuOpen={() => setShowMenu(true)} />
            <div className='app-layout'>
                <Menu show={showMenu} onClose={() => setShowMenu(false)} />
                <main className="with-sidebar">
                    <Container fluid>
                        <Routes>
                            <Route path='/biblioteca' element={<Biblioteca />} />
                            <Route path='/estante' element={<Estante />} />
                            <Route path='/libro' element={<LibroInfo />} />
                            <Route path="/editar-libro" element={<LibroEdit />} />
                            <Route path='/lista-de-deseos' element={<ListaDeDeseo />} />
                            <Route path='/prestamos' element={<Prestamo />} />
                        </Routes>
                    </Container>
                </main>
            </div>
            <Footer />
        </>
    )
}

