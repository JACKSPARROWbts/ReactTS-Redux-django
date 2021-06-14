import { create } from 'domain';
import {createStore,applyMiddleware}  from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState={};
const  middlewrare=[thunk];
const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewrare))
);
export default store;