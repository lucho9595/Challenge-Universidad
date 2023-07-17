import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaterias } from "../../redux/action";

export default function MateriasCreadas() {
    const dispatch = useDispatch();
    const allMaterias = useSelector((state) => state.materias);

    useEffect(() => {
        dispatch(getMaterias())
    }, [dispatch])

    const nombres = allMaterias.map((n) => n.nombre);
    return (
        <div>
            <label>Nombre de Materia:</label>
            <ul>
                {Array.isArray(nombres) && nombres.map((ns) => (
                    <li key={ns.id_materia}>
                        <span key={ns.id_materia} value={ns.id_materia}>
                            {ns}
                        </span>
                        <button className="btn btn-success" >
                            Editar Materia
                        </button>
                        <button className="btn btn-danger" >Borrar Materia</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}