import React ,{Fragment}from 'react'
import Form from './Form'
import Leads from './Leads'
function Dashboard() {
    return (
        <Fragment>
            <div>
               <Form></Form>        
            <Leads></Leads>
            </div>
        </Fragment>
    )
}

export default Dashboard
