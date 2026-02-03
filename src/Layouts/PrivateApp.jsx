import { Routes, Route } from 'react-router-dom'

import { Menu } from '../components/Menu'
import { Biblioteca } from '../pages/Biblioteca/Biblioteca'
import { Estante } from '../pages/Biblioteca/Estante'
import { ListaDeDeseo } from '../pages/wishList/ListaDeDeseo'
import { Prestamo } from '../pages/Prestamo/Prestamo'
import { LibroInfo } from '../pages/Biblioteca/LibroInfo'

export const PrivateApp = () => {
    return (
        <>
            <div className='app-layout'>
                <Menu />
                <main className="with-sidebar">
                    <div className='conteinte-fluid'>
                        <Routes>
                            <Route path='/biblioteca' element={<Biblioteca />} />
                            <Route path='/estante' element={<Estante />} />
                            <Route path='/libro' element={<LibroInfo />} />
                            <Route path='/lista-de-deseos' element={<ListaDeDeseo />} />
                            <Route path='/prestamos' element={<Prestamo />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    )
}

