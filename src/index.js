import React from 'react';
import ReactDOM from 'react-dom/client';
//import Ref from './hooks/Ref';
//import FormikLogin from './formikLogin/FormikLogin';
import BootstrapUI from './Designs/BootstrapUI';
import 'bootstrap/dist/css/bootstrap.min.css';
 


 
 

import reportWebVitals from './reportWebVitals';
import App from './Routes/App';
 
 
 

//import App from './fcomponents/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nofify/> */}
    <App/>
    {/* <Ref/> */}
    {/* <App/> */}
    {/* <FormikLogin/> */}
    {/* <MaterialUI/> */}
    {/* <BootstrapUI/> */}
   {/* <SemanticUI/> */}
    {/* <App/> */}
     {/* <Todo/> */}
    {/* <Form/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
