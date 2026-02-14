import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Contexto
import { AuthProvider } from './context/AuthContext'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

// Páginas públicas
import { Home } from './pages/Home'
import { Contacto } from './pages/Contacto'
import { Login } from './pages/Auth/Login'
import { Register } from './pages/Auth/Register'

//Menú - Rutas privadas
import { PrivateApp } from './layouts/PrivateApp'
import { Biblioteca } from './pages/Biblioteca/Biblioteca'
import { Estante } from './pages/Biblioteca/Estante'
import { LibroInfo } from './pages/Biblioteca/LibroInfo'
import { LibroEdit } from './pages/Biblioteca/LibroEdit'
import { NuevoLibro } from './pages/NuevoLibro/NuevoLibro'
import { AgregarLibro } from './pages/NuevoLibro/AgregarLibro'
import { BuscarLibro } from './pages/NuevoLibro/BuscarLibro'
import { ListaDeDeseo } from './pages/wishList/ListaDeDeseo'
import { Amigos } from './pages/Amigos/Amigos'
import { Invitados } from './pages/Amigos/Invitados'
import { Prestamo } from './pages/Prestamo/Prestamo'

export const App = () => {
    // const { logueado } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <AuthProvider>
            <BrowserRouter>
                <Nav onMenuOpen={() => setShowMenu(false)} />
                <Routes>
                    {/* Rutas públicas */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/registro' element={<Register />} />

                    {/*Rutas privadas simuladas */}
                    <Route path="/mi-biblioteca/*" element={<PrivateApp />} />
                </Routes>
                
                {/* {
                    (logueado)
                        ?
                        <Route path='/login' element={<Login />} />
                        :
                        <div className='app-layout'>
                <Menu show={showMenu} onClose={() => setShowMenu(false)} />
                <main className="with-sidebar">
                    <Container fluid>
                        <Routes>
                            // Biblioteca
                            <Route path='/biblioteca' element={<Biblioteca />} />
                            <Route path='/estante' element={<Estante />} />

                            // Reseña
                            <Route path='/libro' element={<LibroInfo />} />
                            <Route path='/libro/:id' element={<LibroInfo />} />
                            <Route path="/editar-libro" element={<LibroEdit />} />

                            // Nuevo libro
                            <Route path='/nuevo-libro' element={<NuevoLibro />} />
                            <Route path='/agregar-libro' element={<AgregarLibro />} />
                            <Route path='/buscar-libro' element={<BuscarLibro />} />

                            // Lista de deseos
                            <Route path='/lista-de-deseos' element={<ListaDeDeseo />} />
                            <Route path='/amigos' element={<Amigos />} />
                            <Route path='/invitado' element={<Invitados />} />

                            <Route path='/prestamos' element={<Prestamo />} />
                        </Routes>
                    </Container>
                </main>
            </div>
                } */}

                <Footer />
            </BrowserRouter>
        </AuthProvider>
    )
}

