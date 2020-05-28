import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    if(props.mouseY > 50){
        return (
            <div/>
        )
    } else if(props.mouseY <= 50){
        return (
            <Navbar className="bg-light rounded-bottom position-absolute w-100">
                <div className="container">
                    <NavbarBrand href="/" >
                        <img alt="logo" width={30} height={30} src="https://img.icons8.com/cotton/64/000000/domain.png"/>
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/CV"><span className="fa fa-home fa-lg">CV</span></NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        )
    }

}

export default Header