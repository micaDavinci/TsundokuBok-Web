import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <Container className='public-layout'>
            <Row className="justify-content-center m-5 pb-5">
                <Col sm={12} md={6} lg={6} className="text-center">
                    <h1 className="color-rosaO">Leé. Recordá. Deseá.</h1>
                    <h2 className="color-rosaT">Creá tu rincón lector y compartí tu lista de deseos con quienes más te conocen.</h2>
                    <Button as={Link} to="/login" className="justify-content-end button-verde">Iniciar sesión</Button>
                </Col>
            </Row>

            <Row className="mt-3 mx-5 p-5 align-items-center">
                <Col sm={12} md={6} lg={6}>
                    <h2 className="color-rosaT">Sobre nosotros</h2>
                    <div className="ps-3 pe-5 b color-rosaO">
                        <p><i>Tsundoku</i> es una palabra japonesa que describe el acto de comprar libros y acumularlos sin leerlos, dejando que se apilen en estanterías, mesas o rincones del hogar. </p>
                        <p>Lejos de tener una connotación negativa, para muchos representa el amor por los libros y el deseo continuo de aprender, descubrir o simplemente tenerlos cerca. </p>
                    </div>
                    <p>En TsundokuBok, tomamos esa idea y la transformamos en una herramienta: un lugar donde los libros no se pierden en el olvido, sino que esperan su momento para ser descubiertos. TsundokuBok es una aplicación pensada para amantes de los libros que quieren llevar el registro de sus lecturas, organizar sus bibliotecas personales y compartir su amor por la lectura con otros.</p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src="../img/index/nosotros.png" alt="imagen: sobre nosotros" className="img-fluid d-block ms-auto" />
                </Col>
            </Row>

            <Row className="mt-3 mx-5 p-5 align-items-center">
                <Col sm={12} md={6} lg={6}>
                    <img src="../img/index/idea.png" alt="imagen: cómo nació la idea" className="img-fluid d-block ms-auto" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h2 className='color-rosaT'>¿Cómo nació la idea?</h2>
                    <p>La idea de TsundokuBok nació de una necesidad personal: tener un espacio donde no solo se pudiera organizar qué libros tenemos o leímos, sino también registrar pensamientos, emociones y recomendaciones. Queríamos que cada lector pudiera construir su propio universo literario, accesible desde cualquier lugar. </p>
                </Col>
            </Row>

            <Row className="mt-3 mx-5 p-5 align-items-center">
                <Col sm={12} md={6} lg={6}>
                    <h2 className='color-rosaT'>¿Qué nos inspira?</h2>
                    <p>Nos inspira la lectura como refugio, descubrimiento y transformación. TsundokuBok celebra el hábito de leer —incluso cuando acumulamos más libros de los que podemos leer— y lo convierte en una experiencia personal y enriquecedora. </p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src="../img/index/inspiracion.png" alt="Logo" className="img-fluid d-block ms-auto" />
                </Col>
            </Row>

            <Row className="mt-3 mx-5 p-5 align-items-center">
                <Col sm={12} md={6} lg={6}>
                    <img src="../img/index/oferta.png" alt="imagen: qué ofrece TsundokuBok" className="img-fluid d-block ms-auto" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h2 className='color-rosaT'>¿Qué ofrece TsundokuBok?</h2>
                    <ul>
                        <li>Biblioteca personal digital para libros físicos, ebooks y audiolibros.</li>
                        <li>Seguimiento de lecturas, puntuaciones y notas.</li>
                        <li>Lista de deseos compartible.</li>
                        <li>Registro de préstamos.</li>
                        <li>Interfaz intuitiva con diseño minimalista y modo oscuro.</li>
                    </ul>
                </Col>
            </Row>

        </Container>
        /* 
            <div className="row mx-5 container p-5 align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src="../img/index/oferta.png" alt="imagen: qué ofrece TsundokuBok" className="img-fluid d-block ms-auto" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className='color-rosaT'>¿Qué ofrece TsundokuBok?</h2>
                    <ul>
                        <li>Biblioteca personal digital para libros físicos, ebooks y audiolibros.</li>
                        <li>Seguimiento de lecturas, puntuaciones y notas.</li>
                        <li>Lista de deseos compartible.</li>
                        <li>Registro de préstamos.</li>
                        <li>Interfaz intuitiva con diseño minimalista y modo oscuro.</li>
                    </ul>
                </div>
            </div>

        </div> */
    )
}
