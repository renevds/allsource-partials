import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,

} from './actions';

//import { initialState } from './appContext';

const reducer = (state, action) => {
    if (action.type === SETUP_USER_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === SETUP_USER_SUCCESS) {
        return {
            ...state,
            isLoading: action.payload.isLoading,
            user: action.payload.user,
        }
    }
    if (action.type === SETUP_USER_ERROR) {
        return {
            ...state,
            isLoading: false,

        }
    }


    throw new Error(`no such action : ${action.type}`);
}

export default reducer;