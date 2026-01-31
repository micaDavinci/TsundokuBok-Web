import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'
import { Biblioteca } from './components/Biblioteca/Biblioteca'
import { Estante } from './components/Biblioteca/Estante'
import { ListaDeDeseo } from './components/wishList/ListaDeDeseo'
import { Prestamo } from './components/Prestamo/Prestamo'
import './index.css'

import {App} from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>

     {/*<App /> */}

    <div className="d-flex">
      <div className='col-3'>
        <Menu />
      </div>
      <div className='col-9'>
        <main className="flex-grow-1 with-sidebar">
        {/*<Biblioteca />*/}
        {/*<Estante />*/}
        {/*<ListaDeDeseo />*/}
        <Prestamo />
        </main>
      </div>
      
    </div>
    <Footer/>
  </StrictMode>,
)
