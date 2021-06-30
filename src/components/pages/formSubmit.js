import React from 'react';
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap';
import useForm from './useForm';
import validate from './validation/validateInfo';
import './formSubmit.css';

const FormSubmit = ({submitForm}) => {
    
    const { handleChange, values, handleSubmit, errors } 
    = useForm( 
        submitForm, 
        validate 
        );

    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center card">
                <CardBody className="card-body">
                    <CardText className="text-white m-0 card-text">Use form to reach me</CardText>
                </CardBody>
            </Card>
            <Form className="my-5" onSubmit={handleSubmit}>
                <FormGroup className="group" row>
                    <Label htmlFor="email" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input id="email" type="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                    </Col>
                </FormGroup>
                <FormGroup className="group" row>
                    <Label htmlFor="phone" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                    <Input id="phone" type="phone" name="phone" placeholder="Enter phone number" value={values.phone} onChange={handleChange} />
                    {errors.phone && <p>{errors.phone}</p>}
                    </Col>
                </FormGroup>
                <FormGroup className="group" row>
                    <Label htmlFor="name" sm={2}>Full Name</Label>
                    <Col sm={10}>
                    <Input id="name" type="name" name="name" placeholder="Enter your full name" value={values.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="message" sm={2}>Message</Label>
                    <Col sm={10}>
                    <Input id="comments" type="textarea" name="comments" value={values.comments} onChange={handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="success">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );
};

export default FormSubmit