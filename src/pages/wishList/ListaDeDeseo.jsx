import { Row } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api } from "../../api/axios";
import '../../App.css'
import { LibroDeseado } from './LibroDeseado'

export const ListaDeDeseo = () => {
    const { token } = useAuth();
    const [wishListId, setWishListId] = useState("");

    useEffect(() => {
        if (token) {
            getWishList();
        }
    }, [])

    const getWishList = async () => {
        try {
            const request = await api.get(`/wish-list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.success) {
                const wishlist = request.data.result[0];
                setWishListId(wishlist.id_estante);
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
            <h1 className='mb-4'>Lista de deseos</h1>
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