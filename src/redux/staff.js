import * as ActionTypes from './ActionTypes';

export const Rstaff = (state = { staff: [], errMess: null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF_SUCCESS:
            return { ...state, staff: action.payload, errMess: null}
        case ActionTypes.ADD_STAFF_FAILED:
            return { ...state, staff: [], errMess: action.payload}
        default:
            return state;
    }
};