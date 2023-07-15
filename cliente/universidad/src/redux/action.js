import axios from "axios";

export const GET_USUARIOS = "GET_USUARIOS";
export const GET_DETAIL = "GET_DETAIL"
export const POST_USER = "POST_USER";
export const GET_NOTAS_FINALES = "GET_NOTAS_FINALES";
export const GET_CARRERAS = "GET_CARRERAS";

//aca me traigo todos los usuarios
export function getUsers() {
    return async function (dispatch) {
        try {
            let usuarios = await axios.get('http://localhost:4000/estudiantes')
            return dispatch({
                type: GET_USUARIOS,
                payload: usuarios.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

//el usuario se registra
export function registerUser(userData) {
    return async (dispatch) => {
        try {
            let response = await axios.post('http://localhost:4000/estudiantes', userData);
            return dispatch({
                type: POST_USER,
                payload: response,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

//traigo todas las notas finales
export const getNotasFinales = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:4000/notas');
            let notasFinales = response.data.notas;
            dispatch({ type: GET_NOTAS_FINALES, payload: notasFinales });
        } catch (error) {
            console.error(error);
        }
    };
};

//traigo todas las carreras
export function getCarreras() {
    return async function (dispatch) {
        try {
            let response = await axios.get("http://localhost:4000/carreras");
            let data = response.data.carreras
            return dispatch({ type: GET_CARRERAS, payload: data });
        } catch (error) {
            console.error(error);
        }
    };
};