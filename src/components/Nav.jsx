export const Nav = () => {
    return(
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

                <a className="navbar-brand" href="#">
                    <img src="./img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top" />
                    <span className="color-rosaT"> Tsundoku</span><span className="color-verdeB">Bok</span>
                </a>
                <a className="btn justify-content-end bg-verdeO" role="button" aria-disabled="true" href="#">Iniciar sesión</a>
            </div>
        </nav>
        </>
    )
}