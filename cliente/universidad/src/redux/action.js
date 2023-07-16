import axios from "axios";

export const GET_USUARIOS = "GET_USUARIOS";
export const GET_DETAIL = "GET_DETAIL"
export const POST_USER = "POST_USER";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_NOTAS_FINALES = "GET_NOTAS_FINALES";
export const GET_CARRERAS = "GET_CARRERAS";
export const GET_MATERIAS = "GET_MATERIAS";
export const LOGIN_USER = "LOGIN_USER";
export const LOG_OUT = "LOG_OUT";
export const CREATE_MATERIA = "CREATE_MATERIA";
export const CREATE_CARRERA = "CREATE_CARRERA";

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

//logueo del usuario
export function loginAuth(body) {
    return async function (dispatch) {
        try {
            let login = await axios.post(`http://localhost:4000/login`, body);
            return dispatch({
                type: LOGIN_USER,
                payload: login.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

//editar el perfil:
export function editProfile(id, payload) {
    console.log(id)
    console.log("estoy aca")
    return async function (dispatch) {
        console.log("avanzo 1 paso")
        try {
            const edit = await axios.put(`http://localhost:4000/estudiantes/${id}`, payload);
            console.log(edit)
            return dispatch({
                type: EDIT_PROFILE,
                payload: edit.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

//cerramos seccion:
export function userSignOut(datos) {
    return {
        type: LOG_OUT,
        payload: datos,
    };
}

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

//registro de carrera
export function registerCarrera(datas) {
    return async (dispatch) => {
        try {
            let response = await axios.post('http://localhost:4000/carreras', datas);
            return dispatch({
                type: CREATE_CARRERA,
                payload: response,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

//traigo todas las carreras
export function getMaterias() {
    return async function (dispatch) {
        try {
            let response = await axios.get("http://localhost:4000/materias");
            let data = response.data
            return dispatch({ type: GET_MATERIAS, payload: data });
        } catch (error) {
            console.error(error);
        }
    };
};

//registro de materia
export function registerMateria(data) {
    return async (dispatch) => {
        try {
            let response = await axios.post('http://localhost:4000/materias', data);
            return dispatch({
                type: CREATE_MATERIA,
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
