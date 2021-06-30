import React from 'react'
import { CardBody, CardText, Card } from 'reactstrap'
import you from './youcandoit.jpg'
import motiv from './motiv.jpg'
import './Home.css'

const Home = () => {
    return(
        <main>
            <div className="home">
                <section className="Picture">
                    <img className="img" src={motiv} alt="" />
                    <img className="img" src={you} alt="" />
                </section>
                <section className="info">
                    <h1 className="title">Ron L</h1>
                    <p className="description">Full Stack Web Developer</p>
                    <p>This page offers more linked pages and design options.</p>
                    <p>
                        After much game and practice, &nbsp;I was able to offer more options and updates to this website. &nbsp;
                        After passing the Login page, which also has design and Java applied to it, this page offers links to other pages,
                        and design platforms.&nbsp;
                        Here you will find drop down menu, &nbsp;gallery and a built-in resume page,&nbsp; as well as a <span className="howto">How To</span> video.
                        &nbsp;Enjoy browsing through the site and feel free to use the contact page to challenge my creativity.
                    </p>
                    <Card className="text-white bg-secondary my-5 py-4 text-center">
                        <CardBody>
                            <CardText><p className="text-white m-0 test">Don't go where click may link, but instead, create a new route and leave a path!</p></CardText>
                        </CardBody>
                    </Card>
                </section>
            </div>
            
            
        </main>
    )
}

export default Home