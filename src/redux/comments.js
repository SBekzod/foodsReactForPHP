import * as ActionTypes from './ActionTypes';

export const Rcomments = (state = { comments: [], errMess: null, errMess2: null }, action) => {
    switch (action.type) {
        case ActionTypes.COMMENTS_ADDED:
            return { ...state, comments: action.payload, errMess: null, errMess2: null }
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, comments: [], errMess: action.payload, errMess2: null }
        case ActionTypes.ADD_NEW_COMMENT_SUCCESS:
            const newComment = action.payload;
            return { ...state, comments: state.comments.concat(newComment), errMess: null, errMess2: null }
        case ActionTypes.ADD_NEW_COMMENT_FAILED:
            return { ...state, errMess: null, errMess2: action.payload }
        default:
            return state;
    }
};