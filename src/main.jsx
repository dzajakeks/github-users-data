import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GithubContextProvider } from './context/context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const domain = 'dev-8tc3z5swmnp4lgmw.us.auth0.com';
const clientId = 'qhLDeQAiGf8u8J05cjMiz2xDIounwjj0';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
