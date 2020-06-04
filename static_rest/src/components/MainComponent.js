import React from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./HomeComponent";

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Main;