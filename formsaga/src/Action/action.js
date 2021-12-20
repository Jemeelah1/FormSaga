import { ON_LOAD,ON_LOAD_SUCCESS } from './types';

export function onLoadAction(payload) {
    return {
        type: ON_LOAD,
        payload
    };    
}
export function onLoadSuccess(payload) {
    return {
        type: ON_LOAD_SUCCESS,
        payload
    };   
}

