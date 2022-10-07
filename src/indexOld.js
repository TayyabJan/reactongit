import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
//import ConditionalRendering from './components/ConditionalRendering';
//import App from './components/App'
//import Counter from './components/Counter';
//import Label from './components/Label';
// import App from './components/NestedComponents/App'

//import ShowHide2 from './ShowHide2';
//import GitUsers from './components/GitUsers'
//import Life  from './components/Life';
//import LifeCycles from './LifeCycles';
//import Events from './components/Events';
//import Form from './components/Form';
//import Todo from './components/Todo';
import App from './components/LayeredComponents/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App/>
     {/* <Todo/> */}
    {/* <Form/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
