import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
    const { logueado, user, loading } = useAuth()

    if (loading) return null // o spinner

    if (!logueado) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/mi-biblioteca/biblioteca" />;
    }

    return children;
}