import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import router from './router';
import { Auth } from "./contexts/Auth";

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setUser = () => {}
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Auth>
              <RouterProvider router={router} />
          </Auth>
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
