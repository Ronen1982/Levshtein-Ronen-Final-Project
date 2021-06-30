import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Me from './EmilyAndI.jpg'

const About = () => {
    return (
        <Container style={{marginTop: "80px"}}>
        <Row className="my-5">
            <Col lg="7">
                <img style={{height: "90%", width: "80%"}} className="img-fluid rounded mb-4 mb-lg-0" src={Me} alt="" />
            </Col>
            <Col lg="5">
                <h1 className="font-weight-light" style={{fontSize: "50px", letterSpacing: "20px", marginBottom:"20px"}}>About Me</h1>
                <p>I have started University in 2003 taking Business Admin at York. After 2 years in the program I got in a serious car accident. Only after 7 years after the accident I was able to go back to school, but at that time I wanted to change my major to Political Science. </p>
                <p>Once graduated, only 2 years later, I committed myself to finding work that will accomodate both my physical disability and work salary interests. I have searched for almost a year, before my newly wedded wife asked me what do I think about owning a restaurant. It took me some time, but I agreed that it could be an interesting idea, which in turn, can take us out of Toronto. It turns out I can cook pretty good, and I found the restaurant business to be quite challenging. In other words, I believed to have found my calling.</p>
                <p>However, at the beginning of 2020, COVID-19 hit us all, and I started realizing that I need to have some back-up to my restaurant. Hence, I have decided to go back to school, but this time change direction and try something with computers. So, that's how I got here.</p>
                <p>My goal now is to succeed in this field, as I do need to take care of my family. </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default About