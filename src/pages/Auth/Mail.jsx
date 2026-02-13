import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Mail = () => {
    return (
        <>
            <Form.Group className="mb-2">
                <Form.Label>Mail</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    placeholder="nombre@example.com"
                />
            </Form.Group>

            <Form.Group className="mt-2 mb-4 pb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Biblioteca</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <p className="text-center small opacity-75">
                ¿No tenés una cuenta?{" "}
                <Link to="/registro" className="link-register">
                    Registrate acá
                </Link>
            </p>
        </>
    )
}