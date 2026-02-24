import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import { Row } from "react-bootstrap"
import { LibroDeseado } from "../wishList/LibroDeseado"

export const Invitados = () => {
    const { token } = useAuth();
    const [lector, setLector] = useState([]);
    const [wishListId, setWishListId] = useState("");

    useEffect(() => {
        if (token) {
            getLector();
            getWishList();
        }
    }, [])

    const getLector = async () => {
        try {
            const request = await api.get(`/lector`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (request.data.success) {
                setLector(request.data.result[0]);
            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    const getWishList = async () => {
        try {
            const request = await api.get(`/wish-list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                const result = request.data.result;

                if (result.length > 0) {
                    setWishListId(result[0].id_estante);
                } else {
                    setWishListId(null);
                }

            } else {
                alert(request.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Ha surgido un error, por favor intente más tarde");
        }
    }

    return (
        <>
            {!lector ? (
                <h1>Lista de deseos para invitados</h1>
            ) : (
                <>
                    <h1>{lector.biblioteca}</h1>

                    <h2 className="color-verdeB">Lista de deseos de {lector.lector}</h2>
                </>

            )}


            <Row xs={1} md={2} className="g-4 mt-4">
                {!wishListId ? (
                    <p>No hay libros guardados en la lista de deseos todavía.</p>
                ) : (
                    <LibroDeseado wishListId={wishListId} />

                )}
            </Row>
        </>
    )
}