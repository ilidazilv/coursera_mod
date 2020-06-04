import React, {Component} from 'react';
import {Col, Row, Button, Fade} from 'reactstrap';

class Start extends Component{
    constructor(props) {
        super(props);
        this.props.changeBG('start');
    }
    render() {
        return (
            <Fade id="start" className="container-fluid">
                <div className="h-25"/>
                <Row className="justify-content-center">
                    <div id="centerWrld" className="text-danger shadow">Welcome to my world</div>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button className="float-right bg-dark" href="/portfolio">Portfolio</Button>
                    </Col>
                    <Col md={6}>
                        <Button className="bg-dark" href="https://github.com/ilidazilv/coursera_mod/tree/master/portfolio" target="_blank">GitHub</Button>
                    </Col>
                </Row>

            </Fade>
        )
    }
}

export default Start;