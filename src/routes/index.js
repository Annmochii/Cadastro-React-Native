import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Routes() {

    const { logado } = useContext(AuthContext);

    if (logado) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
}