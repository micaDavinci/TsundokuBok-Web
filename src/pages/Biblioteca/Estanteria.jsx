export const Estanteria = (props) => {
    return(
        <div className="col-sm-6 col-md-3 ">
        <div className="bg-grisO p-3 rounded">
            <a href="#" className="link-offset-2 link-underline link-underline-opacity-0">
                <div className='row'>
                    <div className="col-6 color-rosaO">{props.nombre}</div>
                    <div className="col-6 text-end color-verdeO">Cant: {props.cantidad}</div>
                </div>
            </a>        
        </div>
        </div>
    )
}