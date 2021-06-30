import React from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

function Login() {
  const { 
    loginWithRedirect, 
    logout, 
    user, 
    isAuthenticated, 
    getAccessTokenSilently
  } = useAuth0();

  function callApi() {
    axios.get('http://localhost:4000/')
    .then(response => console.log(response.data))
    .catch(error => console.log(error.message));
  };

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get('http://localhost:4000/login', {
        headers: {
          authorization: `Bearer ${token}`
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="App">
      <h1>Login with Auth0</h1>
      <ul>
        <li>
          <button onClick={loginWithRedirect}>Login</button>
          </li>
        <li>
          <button onClick={logout}>Logout</button>
          </li>
      </ul>
      <h3>User is { isAuthenticated ? "Looged in" : "Not logged in"}</h3>

      <ul>
        <li><button onClick={callApi}>Call API</button></li>
        <li><button onClick={callProtectedApi}>Call Protected API Route</button></li>
      </ul>


      {isAuthenticated && (
        <pre style={{textAlign: "start"}}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );    
}

export default Login