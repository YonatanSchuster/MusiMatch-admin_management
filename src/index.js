import React from 'react';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {   BrowserRouter as Router ,Routes,Route, } from 'react-router-dom';
import Home from '../src/pages/Home';
import Users from '../src/pages/Users';
import Statistics from '../src/pages/Statistics'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/users/all" element={<Users/>}/>
        <Route path="/statistics" element={<Statistics/>}/>

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
