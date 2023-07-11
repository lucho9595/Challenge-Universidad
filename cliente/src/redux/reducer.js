import {
    GET_USERS,
} from "./action";

const initialState = {
    usuarios: [],
    backUpUsuarios: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            usuarios: action.payload,
            backUpUsuarios: action.payload
        };
        default: return state
    }
};

export default rootReducer;