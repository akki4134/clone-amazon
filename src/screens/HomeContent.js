import './HomeContent.css'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Button from 'react-bootstrap/Button'

const HomeContent = () => {
    return (

        <Container fluid>

            <Row>
                <Col lg={3}>
                    <div className="home__row">

                        <div className="header_text">
                            Book tickets for essential travel
                        </div>

                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Travel/Flight_PC_QC_372x232._SY232_CB656565308_.jpg"
                                />
                                <p>Flight ticket</p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Travel/Bus_PC_QC_372x232._SY232_CB656565308_.jpg"
                                />
                                <p>Bus ticket</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Travel/Flight_PC_QC_372x232._SY232_CB656565308_.jpg"
                                />
                                <p>Train ticket</p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Travel/Bus_PC_QC_372x232._SY232_CB656565308_.jpg"
                                />
                                <p>Essencial Travel Products</p>
                            </div>

                        </div>

                        <div>
                            Explore more from Amazon Pay
                        </div>
                    </div>
                </Col>

                <Col lg={3}>
                    <div className="home__row">

                        <div className="header_text">
                            Professional tools, testing & more
                        </div>

                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg"
                                />
                                <p>Professional tools</p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/Testing-_372x232._SY232_CB406506817_.jpg"
                                />
                                <p>Measuring instruments</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Jan_san1_372x232._SY232_CB406505872_.jpg"
                                />
                                <p>Cleaning supplies</p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg"
                                />
                                <p>Medical supplies</p>
                            </div>

                        </div>

                        <div>
                            See more
                        </div>
                    </div>
                </Col>

                <Col lg={3}>
                    <div className="home__row">

                        <div className="header_text">
                            Styles for Women | Up to 70% off
                        </div>

                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/Layer_668._SY232_CB656506084_.jpg"
                                />
                                <p> Women's Clothing </p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/Layer_669._SY232_CB656506084_.jpg"
                                />
                                <p>Footwear+Handbags</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/Layer_670._SY232_CB656506084_.jpg"
                                />
                                <p> Watches</p>

                            </div>
                            <div class="col">
                                <img class="img-thumbnail"
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/Layer_671._SY232_CB656506084_.jpg"
                                />
                                <p>Fashion jewellery</p>
                            </div>

                        </div>

                        <div>
                            View all Offers
                        </div>
                    </div>
                </Col>

                <div class="col-lg-3">
                    <div class="col">
                        <div className="home__row">
                            <div className="header_text">
                                Sign in for your best experience
                             </div>
                            <div className="button">
                                <Button size="sm" variant="warning">Sign in Securely</Button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="col">
                        <img class="img-fluid" alt="Responsive image"
                            src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                        />

                    </div>
                </div>

            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <div className="home__row">
                        Styles for Men | Up to 70% off
                    </div>
                </Col>

                <Col>
                    <div className="home__row">
                        Shop by Category
                    </div>
                </Col>
                <Col>
                    <div className="home__row">
                        Amazon Brands & more
                    </div>
                </Col>
                <Col>
                    <div className="home__row">
                        Revamp your home in style
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContent
