import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Biblioteca } from './pages/Biblioteca/Biblioteca'
import { Estante } from './pages/Biblioteca/Estante'
import { ListaDeDeseo } from './pages/wishList/ListaDeDeseo'
import { Prestamo } from './pages/Prestamo/Prestamo'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { Login } from './pages/Auth/Login'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export const App = () => {
    return (
        <BrowserRouter>
            <Nav />

            <div className='app-layout'>
                <Menu />
                <main className="with-sidebar">
                    <div className='conteinte-fluid'>
                    <Routes>                            
                        <Route path='/biblioteca' element={<Biblioteca />} />
                        <Route path='/estante' element={<Estante />} />
                        <Route path='/lista-de-deseos' element={<ListaDeDeseo />} />
                        <Route path='/prestamos' element={<Prestamo />} />
                    </Routes>
                    </div>
                </main>
            </div>

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

