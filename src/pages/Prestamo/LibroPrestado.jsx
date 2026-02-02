export const LibroPrestado = (props) => {
    return(
        <>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center px-2">
                        <img src="../img/img.jpg" className="img-fluid p-1 rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-title color-rosaT">{props.titulo}</p>
                            <p className="color-rosaO">{props.autor}</p>
                            <br></br>
                            <p className="card-title color-rosaT">{props.persona}</p>
                            <p className="color-rosaO">Fecha de préstamo: {props.fecha}</p>
                            <br></br>
                            <p className="mt-2"><small className="color-rosaT bg-verdeO rounded px-2 py-1">{props.estado}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}