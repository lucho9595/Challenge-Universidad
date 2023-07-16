import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarreras } from "../../redux/action";

export default function CarreraCreada() {
  const dispatch = useDispatch();
  const allCarreras = useSelector((state) => state.carreras);
  const allUsuarios = useSelector((state) => state.usuarios); // Estado de Redux que contiene la información de los usuarios

  useEffect(() => {
    dispatch(getCarreras());
    // Aquí también podrías dispatchear una acción para obtener la información de los usuarios si aún no la tienes
  }, [dispatch]);

  const getCantidadInscriptos = (carreraId) => {
    const usuariosCarrera = allUsuarios.filter(
      (usuario) => usuario.carrera_id === carreraId
    );
    return usuariosCarrera.length;
  };

  return (
    <div>
      <label>Nombre de Carrera:</label>
      <ul>
        {Array.isArray(allCarreras) &&
          allCarreras.map((carrera) => (
            <li key={carrera.id_carrera}>
              {carrera.nombre_carrera} - {carrera.facultad} - Tiene:{" "}
              {getCantidadInscriptos(carrera.id_carrera)} inscriptos
            </li>
          ))}
      </ul>
    </div>
  );
}
