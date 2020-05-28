import React, {Component} from 'react';
import {Col, Row, Button} from 'reactstrap';

class Start extends Component{
    render() {
        return (
            <div id="start" className="container">
                <div className="h-25"/>
                <Row className="justify-content-center">
                    <div id="centerWrld">Welcome to my world</div>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button className="float-right">Portfolio</Button>
                    </Col>
                    <Col md={6}>
                        <Button to="">GitHub</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Start;