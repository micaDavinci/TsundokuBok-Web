import { Table } from "react-bootstrap"

export const Usuarios = () => {
    return(
        <>
        <h1 className="mb-4 pb-4">Usuarios</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Estado</th>
                        <th>Administrador</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Biblioteca</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Habilitado</th>
                        <th>SI</th>
                        <th>Nombre y apellido</th>
                        <th>email@gmail.com</th>
                        <th>Biblioteca</th>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}