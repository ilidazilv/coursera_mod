import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Header = (props) => {
    if(props.mouseY > 50){
        return (
            <div/>
        )
    } else if(props.mouseY <= 50){
        return (
            <ReactCSSTransitionGroup transitionAppear={true}
                                     transitionAppearTimeout={200}
                                     transitionEnterTimeout={200}
                                     transitionLeaveTimeout={200}
                                     transitionName="socialMediaAnime">
                <Navbar id="navbar" className="bg-light rounded-bottom position-absolute w-100">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/" >
                            <img alt="logo" width={30} height={30} src="./images/icon.png"/>
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" href="/download/CV.docx"><span className="fa fa-home fa-lg">CV</span></NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </ReactCSSTransitionGroup>
        )
    }

}

export default Header