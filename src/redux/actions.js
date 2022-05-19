import {
    ADD_DATA_LOADING,
    ADD_DATA_SUCCESS,
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    DETAILS_DATA_LOADING,
    DETAILS_DATA_SUCCESS,
    EDIT_DATA_LOADING,
    EDIT_DATA_SUCCESS,
  } from "./actionTypes";
  
  export const addDataLoading = () => {
    return {
      type: ADD_DATA_LOADING,
    };
  };
  
  export const addDataSuccess = (payload) => {
    return {
      type: ADD_DATA_SUCCESS,
      payload,
    };
  };
  
  export const getDataLoading = () => {
    return {
      type: GET_DATA_LOADING,
    };
  };
  
  export const getDataSuccess = (payload) => {
    return {
      type: GET_DATA_SUCCESS,
      payload,
    };
  };

  export const detailsDataLoading = () => {
    return {
      type: DETAILS_DATA_LOADING,
    };
  };
  
  export const detailsDataSuccess = (payload) => {
    return {
      type: DETAILS_DATA_SUCCESS,
      payload,
    };
  };


  export const editDataLoading = () => {
    return {
      type: EDIT_DATA_LOADING,
    };
  };
  
  export const editDataSuccess = (payload) => {
    return {
      type: EDIT_DATA_SUCCESS,
      payload,
    };
  };