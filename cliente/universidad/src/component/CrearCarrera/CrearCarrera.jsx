import React, { useState } from "react";
import { registerCarrera } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function CrearCarrera() {
    const dispatch = useDispatch();
    const allCarreras = useSelector((state) => state.carreras);
    const [input, setInput] = useState({
        nombre_carrera: "",
        descripcion_carrera: "",
        fecha_apertura: "",
        facultad: "",
        año_cursada: 0,
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            ...input,
            año_cursada: parseInt(input.año_cursada),
        };

        if (data) {
            dispatch(registerCarrera(data));
            alert("Carrera creada con éxito!");
        }
    };
console.log(input)
    return (
        <div>
            <h2>Crear Carrera</h2>
            <form method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="floatingInput"
                        className="form-control"
                        name="nombre_carrera"
                        placeholder="Nombre"
                        value={input.nombre_carrera}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <label htmlFor="codigo">Descripcion de la Carrera:</label>
                    <input
                        type="text"
                        id="floatingInput"
                        className="form-control"
                        name="descripcion_carrera"
                        placeholder="Descripcion de la Carrera"
                        value={input.descripcion_carrera}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <label htmlFor="codigo">Fecha de Apertura:</label>
                    <input
                        type="date"
                        id="floatingInput"
                        className="form-control"
                        name="fecha_apertura"
                        placeholder="Fecha de Apertura"
                        value={input.fecha_apertura}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <label htmlFor="codigo">Facultad:</label>
                    <input
                        type="text"
                        id="floatingInput"
                        className="form-control"
                        name="facultad"
                        value={input.facultad}
                        placeholder="Facultad"
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <label htmlFor="codigo">Año de Cursada:</label>
                    <input
                        type="number"
                        id="floatingInput"
                        className="form-control"
                        name="año_cursada"
                        value={input.año_cursada}
                        placeholder="Año Cursada"
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <button type="submit" class="btn btn-primary">
                    Crear
                </button>
            </form>
        </div>
    );
}