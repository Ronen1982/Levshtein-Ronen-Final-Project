import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
        <main className="resume">
            <div className="stage">
                <h3 class="box bounce-5">Ronen Levshtein</h3>
            </div>
            <section className="section-2">
                <h4>Educational Achievments</h4>
                <div>
                    <ul>
                        <li>
                            York University - Certificate - Full Stack Web-Development - 2021
                        </li>
                        <li>
                            York University - B.A. - Political Science - 2012
                        </li>
                        <li>
                            Universal Energy - Management Training Level 3 - 2008
                        </li>
                        <li>
                            High school - 2000
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section-3">
                <h4>Strengths</h4>
                <div>
                    <ul className="square">
                        <li>Fast learner</li>
                        <li>Enthusiastic</li>
                        <li>Trustworthy</li>
                        <li>Creative</li>
                        <li>Work well with others</li>
                        <li>Self motivated</li>
                        <li>Discipline</li>
                        <li>Good communicator</li>
                        <li>Determined</li>
                        <li>Dedicated</li>
                        <li>Honest</li>
                        <li>Respectful</li>
                    </ul>
                </div>
            </section>
            <section className="section-4">
                <h4>Work Experience</h4>
                <div>
                    <ul>
                        <li>
                            Honey's Diner - Owner - 2013 - Present
                        </li>
                        <li>
                            Universal Energy - Senior Sales Manager  - 2005 - 2009
                        </li>
                        <li>
                            Electron - Company Manager - 2001 - 2005
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Resume