import '../index.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';


import { Menu } from '../components/Menu'
import { Biblioteca } from '../pages/Biblioteca/Biblioteca'
import { Estante } from '../pages/Biblioteca/Estante'
import { ListaDeDeseo } from '../pages/wishList/ListaDeDeseo'
import { Prestamo } from '../pages/Prestamo/Prestamo'
import { LibroInfo } from '../pages/Biblioteca/LibroInfo'
import { LibroEdit } from '../pages/Biblioteca/LibroEdit'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { NuevoLibro } from '../pages/NuevoLibro/NuevoLibro';
import { AgregarLibro } from '../pages/NuevoLibro/AgregarLibro';
import { BuscarLibro } from '../pages/NuevoLibro/BuscarLibro';
import { Amigos } from '../pages/Amigos/Amigos';
import { Invitados } from '../pages/Amigos/Invitados';

export const PrivateApp = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (

 
            <div className='app-layout'>
                <Menu show={showMenu} onClose={() => setShowMenu(false)} />
                <main className="with-sidebar">
                    <Container fluid>
                        <Routes>
                            {/* Biblioteca */}
                            <Route path='/biblioteca' element={<Biblioteca />} />
                            <Route path='/estante' element={<Estante />} />

                            {/* Reseña */}
                            <Route path='/libro' element={<LibroInfo />} />
                            <Route path='/libro/:id' element={<LibroInfo />} />
                            <Route path="/editar-libro" element={<LibroEdit />} />

                            {/* Nuevo libro */}
                            <Route path='/nuevo-libro' element={<NuevoLibro />} />
                            <Route path='/agregar-libro' element={<AgregarLibro />} />
                            <Route path='/buscar-libro' element={<BuscarLibro />} />

                            {/* Lista de deseos */}
                            <Route path='/lista-de-deseos' element={<ListaDeDeseo />} />
                            <Route path='/amigos' element={<Amigos />} />
                            <Route path='/invitado' element={<Invitados />} />

                            <Route path='/prestamos' element={<Prestamo />} />
                        </Routes>
                    </Container>
                </main>
            </div>
    )
}

