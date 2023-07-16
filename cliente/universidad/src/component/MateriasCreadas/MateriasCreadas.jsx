import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaterias } from "../../redux/action";

export default function MateriasCreadas() {
    const dispatch = useDispatch();
    const allMaterias = useSelector((state) => state.materias);
    console.log(allMaterias)

    useEffect(() => {
        dispatch(getMaterias())
    }, [dispatch])
    
    const nombres = allMaterias.map((n) => n.nombre);
    return (
        <div>
            <label>Nombre de Materia:</label>
            <span>
                {Array.isArray(nombres) && nombres.map((ns) => (
                    <option key={ns.id_materia} value={ns.id_materia}>
                        {ns}
                    </option>
                ))}
            </span>
        </div>
    )
}