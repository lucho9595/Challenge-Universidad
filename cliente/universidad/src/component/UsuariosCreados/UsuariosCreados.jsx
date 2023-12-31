import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action";

export default function UsuarioCreado() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.usuarios);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const nombres = allUsers.map((n) => n.apellido_y_nombre);
    return (
        <div>
            <label>Apellidos y Nombres:</label>
            <ul>
                {Array.isArray(nombres) && nombres.map((ns) => (
                    <li key={ns.id_usuario}>
                        <span key={ns.id_usuario} value={ns.id_usuario}>
                            {ns}
                        </span>
                        <button className="btn btn-success" >
                            Editar Usuario
                        </button>
                        <button className="btn btn-danger" >Borrar Usuario</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}