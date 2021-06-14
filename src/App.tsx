import React,{useEffect,useState,Fragment} from 'react';
import Headers from './components/Header'
import axios from 'axios';
import Dashboard from './components/Dashboard';
import {Provider} from 'react-redux';
import store from './components/redux/store';
import Alerts from './Alerts'
function App() {
  const [state,setState]=useState([])
  useEffect(()=>{
    load();
   type item<T> = {
     prop:T,
   }
   let Item:item<String>={
     prop:"value"
   }
   console.log(Item.prop)
  },[setState])
  const load=async()=>{
      await axios.get('http://localhost:8000/api/leads/')
      .then((value:any)=>{
        setState(value.data)
      })
      .catch((e:any)=>{
        console.log(e);
      })
  }
  return (
    <Provider store={store}>
 <Fragment>
      <div>
      <Headers></Headers>
      <Alerts></Alerts>
      <Dashboard></Dashboard>
    </div>
    </Fragment>
    </Provider>
  )
}

export default App