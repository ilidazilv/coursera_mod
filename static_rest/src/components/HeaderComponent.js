import React from "react";
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light headerHeight">
                <div className="container">
                    <a className="navbar-brand" href='/home'><img src="/images/icon.png"
                                                              className="img-fluid" alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse fontKalam text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown mr-3">
                                <NavLink className="nav-link dropdown-toggle " to='/menu' id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-right text-center" aria-labelledby="navbarDropdown">
                                    <NavLink to="/food" className="nav-link dropdown-item" >Food</NavLink>
                                    <div className="nav-link dropdown-item" >Drinks</div>
                                    <div className="nav-link dropdown-item" >Hookah</div>
                                </div>
                            </li>
                            <li className="nav-item mr-3">
                                <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
                            </li>
                            <li className="nav-item mr-3">
                                <NavLink className="nav-link" to='/about'>About Us</NavLink>
                            </li>
                            <li className="nav-item mr-3">
                                <div className="nav-link disabled" tabIndex="-1"
                                   aria-disabled="true">Delivery</div>
                            </li>
                            <li className="nav-item mr-3">
                                <div className="nav-link disabled" tabIndex="-1" aria-disabled="true">Cart</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;