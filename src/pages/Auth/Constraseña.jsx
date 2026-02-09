import { Form } from "react-bootstrap"

export const Contraseña = () => {
    return (
        <>
            <Form.Group className="mt-2 mb-4 pb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
        </>
    )
}