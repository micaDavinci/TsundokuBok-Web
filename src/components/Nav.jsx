import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container">
                    {/* Botón hamburguesa solo visible en móvil */}
                    <button
                        className="btn btn-outline-light d-md-none me-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                    >
                        ☰
                    </button>

                    <Link className="navbar-brand" to="/">
                        <img src="./img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                        <span className="color-rosaT"> Tsundoku</span><span className="color-verdeB">Bok</span>
                    </Link>

                    <Link className="btn justify-content-end bg-verdeO" to="/login">Inicio de sesión</Link>
                </div>
            </nav>
        </>
    )
}