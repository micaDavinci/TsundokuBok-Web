import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // 👉 solo simulación visual
        navigate('/mi-biblioteca/biblioteca')
    }

    return (
        <div className='public-layout'>
            <h1>Iniciar sesión</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <Button type="submit">Ingresar</Button>

            </form>

            <Link className="link-offset-2 link-underline link-underline-opacity-0" to="/registro">Registrarse</Link>
        </div>
    )
}