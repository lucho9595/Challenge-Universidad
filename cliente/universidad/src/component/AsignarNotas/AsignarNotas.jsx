import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignNota, getMaterias, getUsers } from "../../redux/action";

export default function AsignarNotas() {
  const dispatch = useDispatch();
  const allUsuarios = useSelector((state) => state.usuarios);
  const allMaterias = useSelector((state) => state.materias);

  const [selectedUsuarioId, setSelectedUsuarioId] = useState("");
  const [selectedMateriaId, setSelectedMateriaId] = useState("");
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);

  const handleUsuarioChange = (e) => {
    const selectedUsuarioId = e.target.value;
    setSelectedUsuarioId(selectedUsuarioId);
    setSelectedMateriaId(""); // Restablecer la materia seleccionada

    const usuario = allUsuarios.find(
      (usuario) => usuario.id_usuario === selectedUsuarioId
    );
    const materiasAsignadas = usuario ? usuario.materias_asignadas : [];

    // Filtrar y obtener las materias asignadas al usuario
    const materiasUsuario = allMaterias.filter((materia) =>
      materiasAsignadas.includes(materia.id_materia)
    );

    setMateriasUsuario(materiasUsuario);
  };

  const handleMateriaChange = (e) => {
    setSelectedMateriaId(e.target.value);
  };

  const handleNota1Change = (e) => {
    setNota1(Number(e.target.value));
  };

  const handleNota2Change = (e) => {
    setNota2(Number(e.target.value));
  };

  const handleNota3Change = (e) => {
    setNota3(Number(e.target.value));
  };

  const handleNota4Change = (e) => {
    setNota4(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      usuario_id: selectedUsuarioId,
      materia_id: selectedMateriaId,
      nota1,
      nota2,
      nota3,
      nota4,
    };

    dispatch(assignNota(data));
    alert("Notas asignadas con éxito!");
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getMaterias());
  }, [dispatch]);

  return (
    <div>
      <h2>Asignar Notas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <select
            id="usuario"
            value={selectedUsuarioId}
            onChange={handleUsuarioChange}
          >
            <option value="">Selecciona un usuario</option>
            {allUsuarios
              .filter((usuario) => usuario.role !== "admin")
              .map((usuario) => (
                <option key={usuario.id_usuario} value={usuario.id_usuario}>
                  {usuario.apellido_y_nombre}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="materia">Materia:</label>
          <select
            id="materia"
            value={selectedMateriaId}
            onChange={handleMateriaChange}
            disabled={!selectedUsuarioId}
          >
            <option value="">Selecciona una materia</option>
            {materiasUsuario.map((materia) => (
              <option key={materia.id_materia} value={materia.id_materia}>
                {materia.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nota1">Nota 1:</label>
          <input
            type="number"
            id="nota1"
            value={nota1}
            onChange={handleNota1Change}
          />
        </div>
        <div>
          <label htmlFor="nota2">Nota 2:</label>
          <input
            type="number"
            id="nota2"
            value={nota2}
            onChange={handleNota2Change}
          />
        </div>
        <div>
          <label htmlFor="nota3">Nota 3:</label>
          <input
            type="number"
            id="nota3"
            value={nota3}
            onChange={handleNota3Change}
          />
        </div>
        <div>
          <label htmlFor="nota4">Nota 4:</label>
          <input
            type="number"
            id="nota4"
            value={nota4}
            onChange={handleNota4Change}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Asignar Notas
        </button>
      </form>
    </div>
  );
}