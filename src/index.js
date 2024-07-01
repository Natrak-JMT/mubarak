import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from './component/NavigationBar';
import reportWebVitals from './reportWebVitals';
import Hero from './component/Hero'
import Hero2 from './component/Hero2'
import Hero3 from './component/Hero3'
import Hero4 from './component/Hero4'
import Hero5 from './component/Hero5'
import Hero6 from './component/Hero6'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <NavigationBar/>
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <Hero6/>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
