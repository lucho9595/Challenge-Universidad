import { persisLocalStorage, removeLocalStorage } from "../utils/localstorage";

import {
    GET_NOTAS_FINALES,
    GET_USUARIOS,
    POST_USER,
    GET_CARRERAS,
    LOGIN_USER,
    EDIT_PROFILE,
    LOG_OUT,
} from './action';

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    usuarios: [],
    backupUsuarios: [],
    carreras: [],
    backUpCarreras: [],
    notasFinales: [],
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
        case GET_NOTAS_FINALES:
            return {
                ...state,
                notasFinales: action.payload,
            };
        case GET_CARRERAS:
            return {
                ...state,
                carreras: action.payload,
                backUpCarreras: action.payload
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
        default:
            return state;
    }
};

export default reducer;