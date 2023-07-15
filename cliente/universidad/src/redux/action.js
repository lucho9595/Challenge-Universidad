import axios from "axios";

export const GET_USUARIOS = "GET_USUARIOS";
export const GET_DETAIL = "GET_DETAIL"
export const POST_USER = "POST_USER";
//aca me traigo todos los usuarios
export function getUsers() {
    return async function (dispatch) {
        try {
            let usuarios = await axios.get('https://localhost:4000/estudiantes')
            return dispatch({
                type: GET_USUARIOS,
                payload: usuarios.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const details = await axios.get(`https://localhost:4000/estudiantes/${id}`)
            console.log(details)
            return dispatch({
                type: GET_DETAIL,
                payload: details.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function createdUser(payload) {
    return async function () {
        const created = await axios.post(`https://localhost:4000/estudiantes`, payload)
        return created
    }
}

