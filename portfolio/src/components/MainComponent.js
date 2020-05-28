import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Start from "./StartComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseY: 51
        }
    }
    _onMouseMove(e){
        this.setState({
            mouseY: e.clientY
        })
    }
    render() {
        return (
            <div onMouseMove={this._onMouseMove.bind(this)}>
                <Header mouseY={this.state.mouseY}/>
                <Switch>
                    <Route path="/start" component={Start}/>
                    <Redirect to="/start"/>
                </Switch>
            </div>
        )
    }
}

export default Main;