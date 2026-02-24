import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logueado, setLogueado] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initAuth = async () => {
            await doRefreshToken()
        }

        initAuth()
    }, [])

    const doRefreshToken = async () => {
        if (localStorage.getItem("token")) {
            try {
                const request = await api.get("/refresh-token", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (request.data.success) {
                    const newAccessToken = request.data.accessToken;
                    const decoded = jwtDecode(newAccessToken);

                    setLogueado(true);
                    setToken(newAccessToken);

                    setUser({
                        nombre: decoded.nombre,
                        is_admin: decoded.is_admin,
                        biblioteca: {
                            nombre: decoded.biblioteca.nombre
                        },
                        role: decoded.is_admin ? "ADMIN" : "USER"
                    });
                }
            } catch (error) {
                logout();
                alert("Ha surgido un error, por favor intente más tarde");
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    const login = ({ accessToken, refreshToken }) => {
        const decoded = jwtDecode(accessToken);

        setLogueado(true);
        setToken(accessToken);

        setUser({
            nombre: decoded.nombre,
            is_admin: decoded.is_admin,
            biblioteca: {
                nombre: decoded.biblioteca.nombre
            },
            role: decoded.is_admin ? "ADMIN" : "USER"
        });

        localStorage.setItem("token", refreshToken);
    }

    const logout = () => {
        setLogueado(false);
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ logueado, login, logout, token, user, loading }}>
            {(loading)
                ?
                <div>Cargando...</div>
                :
                children
            }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}