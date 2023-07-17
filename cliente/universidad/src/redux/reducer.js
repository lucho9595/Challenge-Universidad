import { persisLocalStorage, removeLocalStorage } from "../utils/localstorage";

import {
    GET_NOTAS,
    GET_USUARIOS,
    POST_USER,
    GET_CARRERAS,
    LOGIN_USER,
    EDIT_PROFILE,
    LOG_OUT,
    CREATE_MATERIA,
    CREATE_CARRERA,
    GET_MATERIAS,
    DELETE_ALL_NOTAS,
    UPDATE_NOTA,
    ASSIGN_NOTA_SUCCESS,
    GET_NOTAS_SUCCESS,
} from './action';

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    usuarios: [],
    backupUsuarios: [],
    carreras: [],
    materias: [],
    backUpMaterias: [],
    backUpCarreras: [],
    notas: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USUARIOS:
            return {
                ...state,
                usuarios: action.payload,
                backupUsuarios: action.payload
            };
        case POST_USER:
            return {
                ...state,
                usuarios: action.payload,
                backUpUsers: action.payload
            };
        case GET_NOTAS:
            return {
                ...state,
                notas: action.payload,
            };
        case GET_CARRERAS:
            return {
                ...state,
                carreras: action.payload,
                backUpCarreras: action.payload
            }
        case GET_MATERIAS:
            return {
                ...state,
                materias: action.payload,
                backUpMaterias: action.payload,
            }
        case LOGIN_USER: // Acción para el inicio de sesión
            persisLocalStorage("user", action.payload);
            return {
                ...state,
                user: action.payload, // Guardar la información del usuario en el estado
            };
        case EDIT_PROFILE:
            persisLocalStorage("user", action.payload);
            return {
                ...state,
                user: action.payload, // Guardar la información
                usuario: action.payload, // Guardar
                backupUsuarios: action.payload, // Guardar
            };
        case LOG_OUT:
            removeLocalStorage(action.payload);
            localStorage.clear();
            return {
                ...state,
                user: null,
            };
        case CREATE_MATERIA:
            return {
                ...state,
                materias: [...state.materias, action.payload],
            };
        case CREATE_CARRERA:
            return {
                ...state,
                carreras: [...state.carreras, action.payload],
            };
        case DELETE_ALL_NOTAS:
            const deleteUser = state.notas.find((pj) => pj.id === action.payload);
            return {
                ...state,
                users: deleteUser
            };
        case UPDATE_NOTA:
            return {
                ...state,
                notas: state.notas.map((nota) =>
                    nota.id_nota === action.payload.notaId ? { ...nota, ...action.payload.updatedNota } : nota
                ),
            };
        case ASSIGN_NOTA_SUCCESS:
            return {
                ...state,
                notas: action.payload
            };
        case GET_NOTAS_SUCCESS:
            return {
                ...state,
                notas: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;