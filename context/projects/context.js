import React, {useReducer, useContext, createContext} from 'react';

import reducer from './reducer';

import {
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SET_PROJECTS,
  HANDLE_CHANGE,
} from './actions';

import {mainFetch} from '@allsource/config.axios_instances';

const initialState = {
  search: "",
  projects: [],
  blockchain: "Ethereum",
  sortBy: 'totalVolume',
  sortDirection: '-1'
}

const ProjectsContext = createContext();

const ProjectsProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const setProjects = (projects) => {
    console.log('set projects')
    dispatch({
      type: SET_PROJECTS,
      payload: {
        projects
      }
    });
  }

  const getProjects = async (limit = 50) => {

    const {search, blockchain, projects, sortBy, sortDirection} = state;

    let projectList = `/getProjectsList?withFloor=true&withLogos=true&limit=${limit || 50}&sortBy=${sortBy}&sortDirection=${sortDirection}`;

    // if (search || blockchain) {
    //     projectList = projectList + search + "&blockchain=" + blockchain + '&limit=100';
    // }

    dispatch({type: GET_PROJECTS_BEGIN});
    try {
      const response = await mainFetch.get(projectList);
      console.log("SERVER ANALYTICS RESPONSE:", response);
      const {data} = response
      const projects = data;
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: {
          projects
        },
      })
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PROJECTS_ERROR,
        payload: {
          error
        },
      })
    }

  }
  //console.log(state)

  const handleChange = ({name, value}) => {
    dispatch({type: HANDLE_CHANGE, payload: {name, value}});
  }

  return <ProjectsContext.Provider value={{
    ...state,
    getProjects,
    setProjects,
    handleChange,
  }}>
    {children}
  </ProjectsContext.Provider>
}


const useProjectsContext = () => {
  return useContext(ProjectsContext);
}

export {ProjectsProvider, initialState, useProjectsContext}