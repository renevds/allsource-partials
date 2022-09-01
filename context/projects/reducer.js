import {
    GET_PROJECTS_BEGIN,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    SET_PROJECTS,
    HANDLE_CHANGE,
} from './actions';

const reducer = (state, action) => {

    if (action.type === GET_PROJECTS_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === GET_PROJECTS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            projects: action.payload.projects,
        }
    }

    if (action.type === GET_PROJECTS_ERROR) {
        return {
            ...state,
            isLoading: false,
            // showAlert: true,
            // alertType: 'danger',
            // alertText: action.payload.msg
        }
    }

    if (action.type === SET_PROJECTS) {
        return {
            ...state,
            projects: action.payload.projects,
        }
    }

    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }


    throw new Error(`no such action : ${action.type}`);
}

export default reducer;