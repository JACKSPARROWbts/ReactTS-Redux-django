import axios from 'axios';
import {GET_LEADS,DELETE_LEADS,ADD_LEADS, GET_ERRORS} from '../actions/types';
import {createMessage} from '../actions/Messages';
export const getLeads=()=>(dispatch:any)=>{
return axios.get("http://localhost:8000/api/leads")
.then(res=>{
    dispatch({
        type:GET_LEADS,
        payload:res.data
    });
}).catch(err=>{
    console.log(err);
})
}
export const deleteLeads=(id:any)=>(dispatch:any)=>{
    return axios.delete(`http://localhost:8000/api/leads/${id}/`)
    .then(res=>{
       dispatch(createMessage({deleteLead:"Lead Deleted"}))
        dispatch({
            type:DELETE_LEADS,
            payload:id 
        })
    }).catch((err:any)=>{ 
        console.log(err);
    })
}
export const addLeads=(lead:any)=>(dispatch:any)=>{
    axios.post('http://localhost:8000/api/leads/',lead,{headers:{"Content-Type":"application/json"}})
    .then((res:any)=>{
        dispatch(createMessage({addLead:"Lead Added"}))
        dispatch({
            type:ADD_LEADS,
            payload:res.data
        })
    })
    .catch((err:any)=>{
      const errors={
          msg:err.response.data,
          status:err.response.status
      }
     dispatch({
         type:GET_ERRORS,
         payload:errors
     })
    })
}