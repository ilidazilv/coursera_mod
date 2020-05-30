import React, {Component} from 'react';
import {Col, Row, Fade} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SocialMedia extends Component{
    render() {
        return (
            <Fade className="col-6 mt-5">
                <Row className="m-2 w-75">
                    <span className="socialMedia w-50">@d_boi.00</span>
                    <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/d_boi.00/" target="_blank">
                        <i className="fa fa-instagram"/>
                    </a>
                </Row>
                <Row className="m-2 w-75">
                    <span className="socialMedia w-50">@ilidazilv</span>
                    <a className="btn btn-social-icon btn-github" href="https://github.com/ilidazilv/" target="_blank">
                        <i className="fa fa-github"/>
                    </a>
                </Row>
                <Row className="m-2 w-75">
                    <span className="socialMedia w-50">boiko1dimas@gmail.com</span>
                    <a className="btn btn-social-icon" href="mailto:boiko1dimas@gmail.com"><
                        i className="fa fa-envelope-o"/>
                    </a>
                </Row>
                <Row className="m-2 w-75">
                    <span className="socialMedia w-50">@dmytro.boiko.14</span>
                    <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/dmytro.boiko.14/" target="_blank"><
                        i className="fa fa-facebook-f"/>
                    </a>
                </Row>
                <Row className="m-2 w-75">
                    <span className="socialMedia w-50">Dmytro Boiko</span>
                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/dmytro-boiko-7533231a6/" target="_blank"><
                        i className="fa fa-linkedin"/>
                    </a>
                </Row>
            </Fade>
        )
    }
}
class MessagesBlock extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionAppear={true}
                                     transitionAppearTimeout={600}
                                     transitionEnterTimeout={600}
                                     transitionLeaveTimeout={200}
                                     transitionName="loadComponent">
                <Row><div className="bg-success p-1 rounded text-white messages">Hello, I'm</div></Row>
                <Row className="d-flex flex-row-reverse"><div className="bg-success p-1 rounded float-right text-white messages">Dmytro Boiko</div></Row>
                <Row><div className="bg-success p-1 rounded text-white messages">and I'm a web-developer</div></Row>
                <Row className="d-flex flex-row-reverse">
                    <div className="bg-success p-1 rounded text-white messages">React, Redux, Nodejs</div>
                </Row>
                <Row className="d-flex flex-row-reverse"><div className="bg-success p-1 rounded text-white messages">CSS, Bootstrap</div></Row>
                <Row className="d-flex flex-row-reverse"><div className="bg-success p-1 rounded text-white messages">Clear JS and JQuery</div></Row>
            </ReactCSSTransitionGroup>
        );
    }
}
class AboutMe extends Component{
    render() {
        return (
            <Fade className="AboutMeCom">
                <h1>Dmytro Boiko</h1>
                <h3>Web-developer</h3>
                <Row>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">Redux</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">React</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">Node</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">CSS, Bootstrap</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">Clear JS</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow ">PHP</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">MongoDB</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">MySQL</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">C-language</span>
                    <span className="border bg-dark text-white border-primary m-2 p-1 rounded shadow">JQuery</span>
                </Row>
            </Fade>
        )
    }
}
class Portfolio extends Component{
    constructor(props) {
        super(props);
        this.props.changeBG('portfolio');
        this.state = {
            status: false
        }
    }
    render() {
        return (
            <div className="container " id="portfolio">
                <Row className="h-50">
                    <Col md={6}>
                        <div className="h-25"/>
                        <div className="w-100">
                            <Fade>
                                <img width={256} src="./images/avatar2.png" height={256} className="rounded-circle shadow" id="avatar" alt="avatar"/>
                            </Fade>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="h-25"/>
                        <div id="messagesBlock">
                            <AboutMe />
                        </div>
                    </Col>
                </Row>
                <Row className="h-50">
                    <SocialMedia/>
                    <Col md={6} >
                        <Fade className="d-flex justify-content-center mt-5">
                            <img width={256} src="./images/avatar.JPG" height={256}  className="rounded-circle shadow" id="avatar" alt="avatar"/>
                        </Fade>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Portfolio;