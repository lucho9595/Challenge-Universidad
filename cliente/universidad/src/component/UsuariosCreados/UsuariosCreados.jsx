import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action";

export default function UsuarioCreado() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.usuarios);
console.log(allUsers)

useEffect(() => {
    dispatch(getUsers())
})
    const nombres = allUsers.map((n) => n.apellido_y_nombre);
    return (
        <div>
            <label>Apellidos y Nombres:</label>
            <span>
                {Array.isArray(nombres) && nombres.map((ns) => (
                    <option key={ns.id_usuario} value={ns.id_usuario}>
                        {ns}
                    </option>
                ))}
            </span>
        </div>
    )
}