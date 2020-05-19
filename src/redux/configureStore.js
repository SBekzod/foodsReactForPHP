import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Rdishes } from './dishes';
import { Rcomments } from './comments';
import { Ruser } from './auth';
import { RdishComment } from './dishComments';
import { Rstaff } from './staff';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Rfeedbacks } from './feedbacks';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishlar: Rdishes,
            comments: Rcomments,
            auth: Ruser,
            dishComments: RdishComment,
            staff: Rstaff,
            feedbacks: Rfeedbacks
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}