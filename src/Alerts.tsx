import React,{useState,useEffect,Fragment} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Alerts(props:any) {
    useEffect(()=>{
        const{error,alert,message}=props;
        if(error.msg.name){
           console.log(`Name:${error.msg.name.join()}`);
        }
        if(error.msg.email){
            console.log(`Email:${error.msg.email.join()}`);
        }
        if(message.deleteLead){
            console.log(message.deleteLead);
        }
        if(message.addLead){
            console.log(message.addLead);
        }
    })
   const propTypes={
       error:PropTypes.object.isRequired
   }
    return <Fragment></Fragment>
}
const mapThattoProps=(state:any)=>({
    error:state.Errors,
    message:state.Messages
})
export default connect(mapThattoProps)(Alerts);
