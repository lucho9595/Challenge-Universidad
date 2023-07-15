import {
    GET_NOTAS_FINALES,
    GET_USUARIOS,
    POST_USER,
    GET_CARRERAS,
    LOGIN_USER,
} from './action';

const initialState = {
    user: null, // Estado para almacenar la información del usuario logueado
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
            return {
                ...state,
                user: action.payload, // Guardar la información del usuario en el estado
            };
        default:
            return state;
    }
};

export default reducer;