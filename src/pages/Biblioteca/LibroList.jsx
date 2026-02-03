import { Link } from "react-router-dom"

export const LibroList = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <Link to="/mi-biblioteca/libro" className="link-offset-2 link-underline link-underline-opacity-0">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center px-2">
                                <img src="../img/img.jpg" className="img-fluid p-1 rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title color-rosaT">{props.titulo}</p>
                                    <p className="color-rosaO">{props.autor}</p>
                                    <p className="color-verdeB">{props.valor}</p>
                                    <p><small className="text-body-secondary bg-verdeO rounded px-2 py-1">{props.estado}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}