import React from 'react';
import Header from "./HeaderComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./HomeComponent";
import Food from "./FoodComponent";
import Footer from "./FooterComponent";
import News from "./NewsComponent";
import About from "./AboutComponent";
import Order from "./OrderComponent";
import Freelance from "./FreelanceComponent";

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/food" component={Food}/>
                <Route path="/free" component={Freelance}/>
                <Route path="/contact" component={News}/>
                <Route path="/order" component={Order}/>
                <Route path="/about" component={About}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Main;