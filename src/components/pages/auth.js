import React from 'react'
import './LoggedIn.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

function Loggedin() {
    const { 
        logout, 
        user, 
        isAuthenticated, 
        getAccessTokenSilently
    } = useAuth0();

    // function callApi() {
    //     axios.get('http://localhost:4000/')
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error.message));
    // };
    
    // async function callProtectedApi() {
    //     try {
    //         const token = await getAccessTokenSilently();
    //         const response = await axios.get('http://localhost:4000/login', {
    //             headers: {
    //             authorization: `Bearer ${token}`
    //             },
    //         });
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }


    return (
    <div className="loggedIn">
        <h3>You are { isAuthenticated ? "Looged in" : "Not logged in"}</h3>
        <button onClick={logout}>Logout</button>
        
        {isAuthenticated && (
            <pre style={{textAlign: "start"}}>
            {JSON.stringify([user.nickname, user.name, user.email], null, 2)}
            </pre>
        )}
    </div>
    );    
}

export default Loggedin