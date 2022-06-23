
import * as types from "./actionTypes";

const initialState={
    loading: false,
    data: null,
    isAuth:false,
    error: null,
};

export const userReducer = (state=initialState,action)=>{  
    switch (action.type){
        case types.REGISTER_START:
            case types.LOGIN_START:
                return {
                    ...state,
                    loading:true
                }
                case types.REGISTER_SUCCESS:
            case types.LOGIN_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    data: action.payload,
                    isAuth:action.payload,
                };

                        default:
            return state;
    }
};