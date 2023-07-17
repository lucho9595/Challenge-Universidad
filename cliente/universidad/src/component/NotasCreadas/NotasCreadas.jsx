import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotas, getNotas, getUsers, updateNota } from "../../redux/action";

export default function NotasCreadas() {
  const dispatch = useDispatch();
  const allNotas = useSelector((state) => state.notas);
  const allUsuarios = useSelector((state) => state.usuarios);
  console.log(allNotas)
  useEffect(() => {
    dispatch(getNotas());
    dispatch(getUsers());
  }, [dispatch]);

  const getNombreUsuario = (usuarioId) => {
    const usuario = allUsuarios.find((usuario) => usuario.id_usuario === usuarioId);
    return usuario ? usuario.apellido_y_nombre : "";
  };

  const handleDelete = (notaId) => {
    dispatch(deleteNotas(notaId));
    alert('La nota fue borrada');
    window.location.reload(); // Recargar la página
  };

  const handleUpdateNota = (notaId, updatedNota) => {
    dispatch(updateNota(notaId, updatedNota));
    alert('Notas editadas')
  };

  return (
    <div>
      <h2>Notas Creadas</h2>
      <ul>
        {Array.isArray(allNotas) &&
          allNotas.map((nota) => (
            <li key={nota.id_nota}>
              <span>{getNombreUsuario(nota.usuario_id)}</span> Tiene las siguientes notas: ({nota.nota1} + {nota.nota2} + {nota.nota3} + {nota.nota4}) / 4 = {nota.nota_final}
              <button className="btn btn-success" onClick={() => handleUpdateNota(nota.id_nota, { nota1: 0, nota2: 0, nota3: 0, nota4: 0 })}>
                Editar Nota
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(nota.id_nota)}>Borrar Nota</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
