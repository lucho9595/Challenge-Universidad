import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarreras } from "../../redux/action";

export default function CarreraCreada() {
    const dispatch = useDispatch();
    const allCarreras = useSelector((state) => state.carreras);
    console.log(allCarreras)

    useEffect(() => {
        dispatch(getCarreras())
    }, [dispatch])
    const nombres = allCarreras.map((n) => n.nombre_carrera);
    return (
        <div>
            <label>Nombre de Carrera:</label>
            <span>
                {Array.isArray(nombres) && nombres.map((ns) => (
                    <option key={ns.id_carrera} value={ns.id_carrera}>
                        {ns}
                    </option>
                ))}
            </span>
        </div>
    )
}