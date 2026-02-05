import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicApp } from './Layouts/PublicApp'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { PrivateApp } from './layouts/PrivateApp'

export const App = () => {
    return (
        <BrowserRouter>
            {/* <Nav /> */}

            <Routes>
                {/* Público */}
                <Route path="/*" element={<PublicApp />} />

                {/* Privado (simulado) */}
                <Route path="/mi-biblioteca/*" element={<PrivateApp />} />
            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>
    )
}

