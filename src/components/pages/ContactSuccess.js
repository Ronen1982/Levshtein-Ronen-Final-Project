import React from 'react'
import { Container, CardBody, Card, CardText } from 'reactstrap'


export const Success = () => {
    
    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Thank you for your submmision.<br/> I'll get back to you within 24 hours!</CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Success