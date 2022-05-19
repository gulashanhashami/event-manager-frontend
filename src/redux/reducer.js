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

  const init = {
    data: {
      loading: false,
      error: false,
      data: [],
    },
  };

  export const reducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_DATA_LOADING:
            return {
              ...store,
              data: {
                ...store.data,
                loading: true,
              },
            };
      
          case ADD_DATA_SUCCESS:
            return {
              ...store,
              data: {
                ...store.data,
                loading: false,
              },
            };

            case GET_DATA_LOADING:
            return {
              ...store,
              data: {
                ...store.data,
                loading: true,
              },
            };
      
          case GET_DATA_SUCCESS:
            return {
              ...store,
              data: {
                ...store.data,
                loading: false,
                data: payload,
              },
            };
          
            case DETAILS_DATA_LOADING:
            return {
              ...store,
              data: {
                ...store.data,
                loading: true,
              },
            };
      
          case DETAILS_DATA_SUCCESS:
            return {
              ...store,
              data: {
                ...store.data,
                loading: false,
                data: payload,
              },
            };

            case EDIT_DATA_LOADING:
            return {
              ...store,
              data: {
                ...store.data,
                loading: true,
              },
            };
      
          case EDIT_DATA_SUCCESS:
            return {
              ...store,
              data: {
                ...store.data,
                loading: false,
              },
            };
      
          default:
            return { ...store };
        }
      }; 