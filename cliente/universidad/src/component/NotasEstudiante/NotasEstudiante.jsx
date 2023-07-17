import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotasByUsuario } from '../../redux/action';

export default function NotasEstudiante() {
  const dispatch = useDispatch();
  const usuarioId = localStorage.getItem('user');
  const notas = useSelector((state) => state.notas);

  // Obtener las notas del usuario al cargar el componente
  useEffect(() => {
    if (usuarioId) {
      dispatch(getNotasByUsuario(usuarioId));
    }
  }, [dispatch, usuarioId]);

  // Filtrar las notas por el ID de usuario
  const notasUsuario = notas.filter((nota) => nota.usuario_id === usuarioId);

  return (
    <div>
      <h2>Notas del estudiante</h2>
      {notasUsuario.length > 0 ? (
        <ul>
          {notasUsuario.map((nota) => (
            <li key={nota.id_nota}>
              Nota 1: {nota.nota1}, Nota 2: {nota.nota2}, Nota 3: {nota.nota3}, Nota 4: {nota.nota4}, Nota Final: {nota.nota_final}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron notas para el estudiante.</p>
      )}
    </div>
  );
}
