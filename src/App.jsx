import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Contexto
import { AuthProvider } from './context/AuthContext'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

// Páginas públicas
import { Home } from './pages/Home'
import { Login } from './pages/Auth/Login'
import { Register } from './pages/Auth/Register'

//Menú - Rutas privadas
import ProtectedRoute from './context/ProtectedRoute'
import { PrivateApp } from './layouts/PrivateApp'
import Error404 from './pages/Error404'
import { LoginInvitado } from './pages/Auth/LoginInvitado'


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
                    <Route path='/login-invitado' element={<LoginInvitado />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/registro' element={<Register />} />

                    <Route path="/mi-biblioteca/*" element={<ProtectedRoute>
                        <PrivateApp />
                    </ProtectedRoute>} />

                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    )
}

