import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain= 'dev-acc07uw3.us.auth0.com'
      clientId='OJCXRGNcZ5cLXGrdOuleKrLC575NDXFe'
      redirectUri={`${window.location.origin}/auth`}
      audience="This is Unique"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
