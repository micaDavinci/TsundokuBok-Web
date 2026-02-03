import { Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Auth/Login'
import { Home } from '../pages/Home'

export const PublicApp = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

