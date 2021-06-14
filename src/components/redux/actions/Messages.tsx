import {CREATE_MESSAGES} from './types';
export const createMessage=(msg:any)=>{
    return{
        type:CREATE_MESSAGES,
        payload:msg
    }
}