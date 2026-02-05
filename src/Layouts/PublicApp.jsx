import { Routes, Route } from 'react-router-dom'
import '../index.css'

import { Login } from '../pages/Auth/Login'
import { Home } from '../pages/Home'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import { Contacto } from '../pages/Contacto'
import { Register } from '../pages/Auth/Register'

export const PublicApp = () => {
    const [setShowMenu] = useState(false)
    return (
        <>
        <Nav onMenuOpen={() => setShowMenu(false)} />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/registro' element={<Register />} />
            </Routes>
        <Footer />
        </>
    )
}

