import React from 'react'
import './Portfolio.css'
import { Link, NavLink } from 'react-router-dom'
import work1 from './Work1.png'
import work2 from './Work2.png'
import work3 from './Work3.png'
import work4 from './Img4.png'
import work5 from './Img5.png'
import work6 from './Img6.png'
import work7 from './Img7.png'

const Portfolio = () => {
    return (
        <main>
            <div className="info-title">
                <h1>Portfolio</h1>
            </div>
            <div className="options">
                <card className="card">
                    <img src={work1} />
                    <h2>My first web form sample</h2>
                    <p>This was the first ever web sample I have done.</p>
                </card>
                <card className="card">
                    <img src={work2} />
                    <h2>My first web table sample</h2>
                    <p>This was the first ever web sample I have done.</p>
                </card>
                <card className="card">
                    <img src={work3} />
                    <h2>My first web page sample</h2>
                    <p>This was the first ever web sample I have done.</p>
                </card>
                <card className="card">
                    <img src={work4} />
                    <h2>My first burger menu</h2>
                    <p>This was the first ever web burger sample I have done.</p>
                </card>
                <card className="card">
                    <img src={work5} />
                    <h2>My first web page with navigation bar</h2>
                    <p>This was my first navigation bar. In addition to the navigation there is also a burger menu</p>
                </card>
                <card className="card">
                    <img src={work6} />
                    <h2>fs 1000 group project</h2>
                    <p>Image gallery via grid design.</p>
                </card>
                <card className="card">
                    <img src={work7} />
                    <h2>fs 1000 group project</h2>
                    <p>Image gallery via table design</p>
                </card>
                {/* <div className="image-gallery">
                    <Link to="./Work1.png" className="img-1">
                        <i className="icon ion-md-expand"><h5>This was my first work</h5></i>
                    </Link>
                    <a href="Work2.png" className="img-2">
                        <i className="icon ion-md-expand"><h5>This was my second work</h5></i>
                    </a>
                    <a href="Work3.png" className="img-3">
                        <i className="icon ion-md-expand"><h5>This is my first web-site</h5></i>
                    </a>
                    <a href="Image5.png" className="img-4">
                        <i className="icon ion-md-expand"><h5>This is my first Project with CSS modifications</h5></i>
                    </a>
                    <a href="Image6.png" className="img-5">
                        <i className="icon ion-md-expand"><h5>This is my first Form with CSS modifications</h5></i>
                    </a>
                    <a href="Img7.png" className="img-6">
                        <i className="icon ion-md-expand"><h5>Gallery Hover Effects</h5></i>
                    </a>
                    <a href="Img6.png" className="img-7">
                        <i className="icon ion-md-expand"><h5>Responsive Gallery</h5></i>
                    </a>
                    <a href="Img4.png" className="img-8">
                        <i className="icon ion-md-expand"><h5>Resposive Nav-Bar</h5></i>
                    </a>
                </div> */}
            </div>
        </main>
    )
}

export default Portfolio