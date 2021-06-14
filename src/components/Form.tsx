import React, { useState } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLeads} from '../components/redux/reducers/leads2'
function Form(props:any) {
   
    const[state,setState]=useState({name:'',email:'',message:''});
    const onChange=(e:any)=>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        const{name,email,message}=state;
        const lead={name,email,message};
        props.addLeads(lead);
        setState({
            name:"",
            email:"",
            message:""
        })
    }
    const propTypes={
        addLeads:PropTypes.func.isRequired
    }
    const {name,email,message}=state;
    return (
        
        <div>
          <form onSubmit={onSubmit}>
              <label htmlFor="">Name</label>
            <input type="text" name="name" value={name}
            onChange={onChange}></input>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={email}
            onChange={onChange} ></input>
            <label htmlFor="">Message</label>
            <input type="text" name="message" value={message}
            onChange={onChange}/>
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}
const maptoProps=(state:any)=>({
    leads:state.leads.leads
})
export default connect(maptoProps,{addLeads})(Form);
