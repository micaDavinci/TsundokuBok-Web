import { Table } from "react-bootstrap"

export const Consultas = () => {
    return(
        <>
        <h1 className="mb-4 pb-4">Consultas</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Nombre</th>
                        <th>email@gmail.com</th>
                        <th>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos optio id quae aut expedita, incidunt magni nemo cumque magnam cupiditate, quo corrupti. Dignissimos eius quisquam totam pariatur nesciunt vitae corrupti.</th>
                        
                    </tr>
                </tbody>
            </Table>

        </>
    )
}