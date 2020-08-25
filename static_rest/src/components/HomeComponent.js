import React from "react";
import {Card, CardBody, CardTitle, Container, Row, Col} from 'reactstrap';

const Slide = (props) => {
    return (
        <div className={props.status === 'active' ? "carousel-item text-center carouselItemMy active" : "carousel-item text-center carouselItemMy" }>
            {props.msg}
        </div>
    )
}

const HomeMenu = () => {
    return (
        <div className='col-md-6 col-sm-12'>
            <Card className="m-3 d-flex justify-content-center">
                <CardBody>
                    <CardTitle className='text-center font-weight-bolder'>Hot menu</CardTitle>
                    <hr/>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                    <Row>
                        <Col width={6} className='text-left'>Chicken</Col><Col width={6} className='text-right'>2$</Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

const HomeMap = () => {
    return (
        <div className='col-md-6 col-sm-12'>
            <Card className="m-3 d-flex justify-content-center">
                <CardBody >
                    <CardTitle className='text-center font-weight-bolder'>Our location</CardTitle>
                    <hr/>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="100%" title='map' height="300" frameBorder="0" scrolling="no" marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <div className="container-fluid p-0 mainHeight fontKalam">
                <div id="carouselExampleIndicators" className="carousel slide h-100" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner h-100 carouselBckgrnd">
                        <Slide msg={'Welcome, my lovely zirka\)'} status={'active'}/>
                        <Slide msg={'You\'re on my website'}/>
                        <Slide msg={'Test'}/>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Container className='fontKalam homeFontSize'>
                <Row>
                    <HomeMenu/>
                    <HomeMap/>
                </Row>
            </Container>
        </div>
    )
}

export default Home;