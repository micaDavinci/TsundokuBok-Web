import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <>
      <div
        className="sidebar offcanvas-md offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        /* aria-labelledby="sidebarMenuLabel"
        style={{ width: '240px' }} */
      >
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title" id="sidebarMenuLabel color-rosaO">Menú</h5>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="nav flex-column nav-pills p-2 gap-2">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 color-rosaT" to="/biblioteca" > <i className="bi bi-house-door"></i>Biblioteca </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 color-rosaT" to="/lista-de-deseos"> <i className="bi bi-calendar"></i>Lista de deseos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 color-rosaT disabled" to=""> <i className="bi bi-folder"></i>Nuevo libro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2 color-rosaT" to="/prestamos"> <i className="bi bi-folder"></i> Préstamos</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
