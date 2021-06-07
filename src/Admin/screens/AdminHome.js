import './AdminHome.css'

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from '../container/SidebarData';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import Button from 'react-bootstrap/Button'

import { IconContext } from 'react-icons';

const AdminHome = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    return (
        <>
            <Container fluid className='bg'>
                <IconContext.Provider value={{ color: '#fff' }}>

                    <Navbar fixed="top" bg="#060b26" variant="dark">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>

                        <Navbar.Brand className='navbar-text' href="#"><Nav.Link href="#action1">Dashboard</Nav.Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">New Requests</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Link</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
                <h2><span></span>Dashboard</h2>
                <br />
                <br />

                <div className='con' onClick={closeSidebar} >

                    <Row>
                        <Col lg={2} md={4} sm={4} xs={6} >
                            <div className="card">

                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">

                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">

                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">

                            </div>
                        </Col>

                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">

                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">

                            </div>
                        </Col>

                    </Row>
                    <br />
                    <br />

                    <Row>
                        <Col lg={3}>
                            <div className="card2">

                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className="card2">

                            </div>

                        </Col>
                        <Col lg={3}>
                            <div className="card2">

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <div className="card2">

                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <div className="card2">

                                    </div>

                                </Col>
                                <Col>
                                    <div className="card2">

                                    </div>

                                </Col>
                            </Row>

                        </Col>

                    </Row>

                </div>
            </Container>


        </>
    );
}

export default AdminHome;