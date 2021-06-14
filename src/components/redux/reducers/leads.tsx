import {DELETE_LEADS, GET_LEADS,ADD_LEADS} from '../actions/types';
const initialState={
    leads:[]
}
export default function(state=initialState,action:any){
switch(action.type){
    case GET_LEADS:
      return{
          ...state,
          leads:action.payload
      };
      case DELETE_LEADS:
          return{
              ...state,
              leads:state.leads.filter((lead:any)=>lead.id!==action.payload)
          }
        case ADD_LEADS:
            return{ 
                ...state,
                leads:[...state.leads,action.payload]
            }
      default:
          return state;
}
}