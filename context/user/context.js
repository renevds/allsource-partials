import React, { useReducer, useContext, createContext } from 'react';


import reducer from './reducer';

import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,

} from './actions.js';
import {mainFetch} from "@allsource/config.axios_instances";


const initialState = {
    user: null,
    isLoading: false,
    userTiers: [],
    userRankings: [],
    userPricePredictions: [],
}

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { userTiers, userRankings, userPricePredictions } = state;

    const getUserData = async () => {

        dispatch({ type: SETUP_USER_BEGIN });

        try {
            const response = await mainFetch('/getLocals');

            console.log("SERVER USER DATA RESPONSE:", response);
            const { data } = response;
            const user = data;

            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    isLoading: false,
                    user
                }
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: SETUP_USER_ERROR,
                payload: {
                    msg: error
                }

            })
        }
    }



    return <UserContext.Provider value={{
        ...state,
        getUserData,
    }}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () => {
    return useContext(UserContext);
}

export { UserProvider, initialState, useUserContext }