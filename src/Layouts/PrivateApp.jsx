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
import { Consultas } from '../pages/Admin/Consultas';
import { Usuarios } from '../pages/Admin/Usuarios';
import ProtectedRoute from '../context/ProtectedRoute';

export const PrivateApp = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='app-layout'>
            <Menu show={showMenu} onClose={() => setShowMenu(false)} />
            <main className="with-sidebar">
                <Container fluid>
                    <Routes>
                        {/* Biblioteca */}
                        <Route
                            path='/biblioteca'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <Biblioteca />
                                </ProtectedRoute>}
                        />
                        <Route
                            path='/estante/:id'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <Estante />
                                </ProtectedRoute>}
                        />

                        {/* Reseña */}
                        <Route
                            path='/libro'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <LibroInfo />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/libro/:id'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <LibroInfo />
                                </ProtectedRoute>}
                        />

                        <Route
                            path="/editar-libro/:id"
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <LibroEdit />
                                </ProtectedRoute>}
                        />

                        {/* Nuevo libro */}
                        <Route
                            path='/nuevo-libro'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <NuevoLibro />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/agregar-libro'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <AgregarLibro />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/buscar-libro'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <BuscarLibro />
                                </ProtectedRoute>}
                        />

                        {/* Lista de deseos */}
                        <Route
                            path='/lista-de-deseos'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <ListaDeDeseo />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/amigos'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <Amigos />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/invitado'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "GUEST"]}>
                                    <Invitados />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/prestamos'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN", "USER"]}>
                                    <Prestamo />
                                </ProtectedRoute>}
                        />

                        {/* Consultas */}
                        <Route
                            path='/consultas'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN"]}>
                                    <Consultas />
                                </ProtectedRoute>}
                        />

                        <Route
                            path='/usuarios'
                            element={
                                <ProtectedRoute allowedRoles={["ADMIN"]}>
                                    <Usuarios />
                                </ProtectedRoute>}
                        />
                    </Routes>
                </Container>
            </main>
        </div>
    )
}

