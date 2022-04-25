import React,{useState, useEffect} from 'react';

function App() {
  const [value, setValue] = useState('---');
  const [apiValue, setApiValue] = useState('***');

  useEffect(async ()=>{
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;

    if(clientPrincipal){
      setValue(clientPrincipal.userDetails);
    }

    const apires = await fetch('/api/HttpTrigger2');
    const apiPayload = await apires.json();
    const { apiClientPrincipal } = apiPayload;

    if(apiClientPrincipal){
      setApiValue(apiClientPrincipal.userDetails);
    }
  },[]);


  return <>
    <div><a href="/.auth/login/aad">Login</a></div>
    <div>Hello {value}!!!</div>
    <div>API: {apiValue}</div>
  </>;
}

export default App;
