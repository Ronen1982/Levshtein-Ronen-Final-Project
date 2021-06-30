import React, { useState } from 'react';
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap';
import FormSubmit from './formSubmit';
import Success from './ContactSuccess';


const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <Container>
            {!isSubmitted ? <FormSubmit submitForm={submitForm} /> : (<Success />)}
        </Container>
    )
}

export default Contact