export const Footer = () => {
    return(
        <>
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary"> 
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary"> 
                <div className="row"> 
                    <div className="col-4 mb-3"> 
                        <a className="navbar-brand" href="#">
                            <img src="./img/logo.png" alt="Logo" height="30" className="d-inline-block align-text-top"/>
                            <span className="fs-5 color-rosaT"> Tsundoku</span><span className="fs-5 color-verdeB">Bok</span>
                        </a>
                    </div> 
                    <div className="col-6 col-lg-3"> 
                        <h5>Ayuda</h5> 
                        <ul className="list-unstyled"> 
                            <li><a className="link-offset-2 link-underline link-underline-opacity-0 color-verdeO" href="#">Contacto</a></li> 
                            <li><a aria-disabled="true color-grisC">Manual de usuario</a></li> 
                        </ul> 
                    </div> 
                </div> 
            </div> 
        </footer>
        </>
    )
}