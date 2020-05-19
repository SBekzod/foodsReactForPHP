import * as ActionTypes from './ActionTypes';

export const Rfeedbacks = (state = { feedbacks: [], errMess: null, errMess2: null }, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACKS_ADDED:
            return { ...state, feedbacks: action.payload, errMess: null, errMess2: null }
        case ActionTypes.FEEDBACKS_FAILED:
            return { ...state, feedbacks: [], errMess: action.payload, errMess2: null }
        case ActionTypes.ADD_NEW_FEEDBACK_SUCCESS:
            const newFeedback = action.payload;
            return { ...state, feedbacks: state.comments.concat(newFeedback), errMess: null, errMess2: null }
        case ActionTypes.ADD_NEW_FEEDBACK_FAILED:
            return { ...state, errMess: null, errMess2: action.payload }
        default:
            return state;
    }
};