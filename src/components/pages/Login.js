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


  return (
    <div className="App">
      <h1>User Login</h1>
      <button onClick={loginWithRedirect}>Login with Auth0</button>
    </div>
  );    
}

export default Login