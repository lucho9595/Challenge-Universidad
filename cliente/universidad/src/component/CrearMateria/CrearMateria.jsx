import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarreras, getMaterias, registerMateria } from "../../redux/action";

export default function CrearMateria() {
    const dispatch = useDispatch();
    const allMaterias = useSelector((state) => state.materias);
    const allCarreras = useSelector((state) => state.carreras);
    const [input, setInput] = useState({
        nombre: '',
        horas_total_cursada: 0,
        forma_aprobacion: '',
        año_cursada: 0,
        carrera_id: 0,
    })

    useEffect(() => {
        dispatch(getMaterias());
        dispatch(getCarreras());
    }, [dispatch]);

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleMateriaChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleCarreraChange = (e) => {
        const selectedCarreraId = parseInt(e.target.value);
        const selectedCarrera = allCarreras.find(
          (carrera) => carrera.id_carrera === selectedCarreraId
        );
      
        setInput({
          ...input,
          carrera_id: selectedCarrera ? selectedCarreraId : "",
        });
      };
      
    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            ...input,
            año_cursada: parseInt(input.año_cursada),
            carrera_id: parseInt(input.carrera_id)
        };

        if (data) {
            dispatch(registerMateria(data));
            alert("Materia creada con éxito!");
        }
    }

console.log(input)
    return (
        <div>
            <h2>Crear Materia</h2>
            <form method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="floatingInput"
                        className="form-control"
                        name="nombre"
                        value={input.nombre}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <label htmlFor="horas_total_cursada">Horas Cursadas:</label>
                    <input
                        type="text"
                        id="floatingInput"
                        className="form-control"
                        name="horas_total_cursada"
                        value={input.horas_total_cursada}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                <label htmlFor="forma_aprobacion">Forma de Aprobación:</label>
                    <select
                        id="floatingInput"
                        className="form-select"
                        name="forma_aprobacion"
                        value={input.forma_aprobacion}
                        onChange={(e) => handleMateriaChange(e)}
                    >
                        <option value="">Selecciona una Forma de Aprobación</option>
                        <option value="Promoción">Promoción</option>
                        <option value="Examen Final">Examen Final</option>
                    </select>
                </div>
                <div>
                <label htmlFor="carrera_id">Carreras:</label>
                    <select
                        id="floatingInput"
                        className="form-select"
                        name="carrera_id"
                        value={input.carrera_id}
                        onChange={(e) => handleCarreraChange(e)}>
                        <option value="">Selecciona una carrera</option>
                        {Array.isArray(allCarreras) && allCarreras.map((carrera) => (
                            <option key={carrera.id_carrera} value={carrera.id_carrera}>
                                {carrera.nombre_carrera}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="año_cursada">Año de Cursada:</label>
                    <input
                        type="text"
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