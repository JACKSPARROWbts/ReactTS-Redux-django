import {combineReducers} from 'redux';
import leads from './leads';
import Errors from './Errors';
import Messages from './Messages'
export default combineReducers({
leads,
Errors,
Messages
});