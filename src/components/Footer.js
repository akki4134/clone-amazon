import './Footer.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (

        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">AbeBooks</span>
                            <span className="footer_optionLineTwo">Books, art<br />&amp; collectibles</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">Amazon Web Services</span>
                            <span className="footer_optionLineTwo">Scalable Cloud<br />&amp; Computing Services</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">Audible</span>
                            <span className="footer_optionLineTwo">Download<br />&amp; Audio Books</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">	DPReview</span>
                            <span className="footer_optionLineTwo">Digital<br />&amp; Photography</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">	IMDb</span>
                            <span className="footer_optionLineTwo">Movies, TV<br />&amp; & Celebrities</span>
                        </div>
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">AbeBooks</span>
                            <span className="footer_optionLineTwo">Books, art<br />&amp; collectibles</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">Amazon Web Services</span>
                            <span className="footer_optionLineTwo">Scalable Cloud<br />&amp; Computing Services</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">Audible</span>
                            <span className="footer_optionLineTwo">Download<br />&amp; Audio Books</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer_option">
                            <span className="footer_optionLineOne">	DPReview</span>
                            <span className="footer_optionLineTwo">Digital<br />&amp; Photography</span>
                        </div>
                    </Col>
                    <Col>

                    </Col>

                </Row>
                <br />
                <br />
                <Row className="footer_context">
                    <div className="footer_text">
                        <span> Conditions of Use & Sale </span>
                    </div>
                    <div className="footer_text">
                        <span> Privacy Notice </span>
                    </div>
                    <div className="footer_text">
                        <span> Interest-Based Ads </span>
                    </div>
                    <div className="footer_text">
                        <span> © 1996-2021, Amazon.com, Inc. or its affiliates </span>
                    </div>
                </Row>
                <br />
                <Row className="author" >
                    <div className="author1">
                        Akhil's Amazon Clone
                    </div>
                </Row>
            </Container>

        </div>

    )
}

export default Footer
