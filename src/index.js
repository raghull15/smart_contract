import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import LeaseForm from './components/leaseform';
import PartiesProperty from './components/PartiesProperty';
import LeaseTerms from './components/LeaseTerms';
import CostsClauses from './components/CostsClauses';
import FinalDetailsDownload from './components/FinalDetailsDownload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LeaseForm/>
    <PartiesProperty/>
    <LeaseTerms/>
    <CostsClauses/>
    <FinalDetailsDownload/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
