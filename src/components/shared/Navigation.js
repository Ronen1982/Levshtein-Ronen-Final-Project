import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import Image from './Veron-Logo.png'
import './Navigation.css'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar dark color="dark" expand="md" fixed="top">
            <Container>
                <NavbarBrand href="/"><img style={{ height:"70px", width: "80px"}} alt="logo" src={Image} class="logoImg"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/about">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/contact">Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/submissions" className="login">User Page</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation