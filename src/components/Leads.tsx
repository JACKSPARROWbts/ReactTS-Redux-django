import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads,deleteLeads} from '../components/redux/reducers/leads2'
function Leads(props:any) {
    useEffect(()=>{
      props.getLeads();
    },[])
    const propTypes={
        leads:PropTypes.array.isRequired,
        getLeads:PropTypes.func.isRequired,
        deleteLeads:PropTypes.func.isRequired
    }
    return (
        <Fragment>
            <div>
            <h1>Leads</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                   {props.leads.map((lead:any)=>(
                       <tr key={lead.id}>
                           <td>{lead.id}</td>
                           <td>{lead.name}</td>
                           <td>{lead.email}</td>
                           <td>{lead.message}</td>
                           <td>{lead.created_at}</td>
                           <td><button 
                           onClick={()=>props.deleteLeads(lead.id)}>Delete</button></td>
                       </tr>
                   ))} 
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}

const mapStatetoProps=(state:any)=>({
    leads:state.leads.leads
})
export default connect(mapStatetoProps,{getLeads,deleteLeads})(Leads);
