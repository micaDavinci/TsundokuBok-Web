import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import { Row } from "react-bootstrap"
import { LibroDeseado } from "../wishList/LibroDeseado"

export const Invitados = () => {
    const { token } = useAuth();
    const [lector, setLector] = useState([]);

    useEffect(() => {
        if (token) {
            getLector();
        }
    }, [])

    const getLector = async () => {
        try {
            const request = await api.get(`lector`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (request.data.success) {
                setLector(request.data.result);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }
    return(
        <>
        <h1>{lector.biblioteca}</h1>
        <h2 className="color-verdeB">Lista de deseos de {lector.lector}</h2>

        <Row xs={1} md={2} className="g-4 mt-4">
                <LibroDeseado/>
        </Row>
        </>
    )
}