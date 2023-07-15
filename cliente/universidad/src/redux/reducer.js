import {
    GET_NOTAS_FINALES,
    GET_USUARIOS,
    POST_USER,
    GET_CARRERAS
} from './action';

const initialState = {
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
                users: action.payload,
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
        default:
            return state;
    }
};

export default reducer;