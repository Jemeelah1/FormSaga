import {ON_LOAD_SUCCESS } from "../Action/types";
const initialState = {
    form: []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
    case ON_LOAD_SUCCESS:
        console.log(action)
        return {
            ...state,
            form:[...state.form, action.payload]
        }
    default:
       return state
    }
}
export default reducer;