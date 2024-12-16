import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import {ApolloProvider} from '@apollo/client';
import client from './apolloClient';
import DataDocuments from './components/DataDocuments.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <DataDocuments />
      </ApolloProvider>
  </React.StrictMode>
);
