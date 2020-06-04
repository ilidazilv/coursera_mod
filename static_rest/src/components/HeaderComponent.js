import React, {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavItem,
    NavbarToggler,
    Nav,
    Dropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem,
    Jumbotron
} from "reactstrap";
import {NavLink} from "react-router-dom";
import {Fade} from 'react-slideshow-image';

const Slideshow = () => {
    const fadeProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        arrows: true
    }
    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <Jumbotron className="image-container slides">
                        <div className="container">
                            1
                        </div>
                    </Jumbotron>
                </div>
                <div className="each-fade">
                    <Jumbotron className="image-container slides">
                        <div className="container">
                            2
                        </div>
                    </Jumbotron>
                </div>
                <div className="each-fade">
                    <Jumbotron className="image-container slides">
                        <div className="container">
                            3
                        </div>
                    </Jumbotron>
                </div>
            </Fade>
        </div>
    )
}

const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const [isDropOpen, setIsDropOpen] = useState(false);
    const toggle = () => setIsToggleOpen(!isToggleOpen);
    const drop = () => setIsDropOpen(!isDropOpen);
    return (
        <React.Fragment>
            <Navbar className="bg-light" light expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/images/icon.png" height="30" width="30" alt="brand"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse className="justify-content-end"  isOpen={isToggleOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Dropdown isOpen={isDropOpen} toggle={drop} onMouseEnter={drop}>
                                    <DropdownToggle tag="div">
                                        <NavLink to="/menu">Menu</NavLink>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Hookah</DropdownItem>
                                        <DropdownItem>Food</DropdownItem>
                                        <DropdownItem>Drink</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ml-3" to="/menu"><span>Order Online</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ml-3" to="/menu"><span>News</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ml-3" to="/menu"><span>About us</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <a className="ml-3" href="tel:+380-92-221-54-63">+380-92-221-54-63</a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Slideshow/>
        </React.Fragment>
    )
}

export default Header;