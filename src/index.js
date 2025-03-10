import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import LeaseForm from './components/leaseform';
import PartiesProperty from './components/PartiesProperty';
import LeaseTerms from './components/LeaseTerms';
import CostsClauses from './components/CostsClauses';
import FinalDetailsDownload from './components/FinalDetailsDownload';
import LocalDocs from './LocalDocs';
import DocumentCards from './DocumentCards';
import ManageEmployee from './ManageEmployee';
import Construction from './Construction';
import Money from './Money';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <LocalDocs/>
    <DocumentCards/>
    <ManageEmployee/>
    <Construction/>
    <Money/>
  
   
  </React.StrictMode>
);

