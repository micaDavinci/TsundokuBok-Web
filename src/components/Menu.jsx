export const Menu = () => {
  return(
    <>
      <div
        className="offcanvas-md offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        style={{ width: '240px' }}
      >
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title" id="sidebarMenuLabel color-rosaO">Menú</h5>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="nav flex-column nav-pills p-2 gap-2">
            <li className="nav-item">
              <a href="" className="nav-link d-flex align-items-center gap-2 color-rosaT">
                <i className="bi bi-house-door">i</i>
                <span className="d-md-inline">Biblioteca</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center gap-2 color-rosaT">
                <i className="bi bi-calendar">i</i>
                <span className="d-md-inline">Lista de deseos</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center gap-2 color-rosaT">
                <i className="bi bi-folder">i</i>
                <span className="d-md-inline">Nuevo libro</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center gap-2 color-rosaT">
                <i className="bi bi-folder">i</i>
                <span className="d-md-inline">Préstamos</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
