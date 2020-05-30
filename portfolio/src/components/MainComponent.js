import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Start from "./StartComponent";
import Header from "./HeaderComponent";
import Portfolio from "./PortfolioComponent";


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseY: 51,
            page: 'start'
        }
        this._onMouseMove = this._onMouseMove.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    _onMouseMove(e){
        if(this.state.mouseY <= 50 && e.clientY > 50){
            this.setState({
                mouseY: e.clientY
            })
        } else if (this.state.mouseY > 50 && e.clientY <= 50){
            this.setState({
                mouseY: e.clientY
            })
        }
    }
    changePage(page){
        this.setState({
            page: page
        })
    }
    render() {
        return (
            <div onMouseMove={this._onMouseMove} className={this.state.page === 'portfolio' ? "bg-portfolio" : 'bg-start'}>
                <Header mouseY={this.state.mouseY}/>
                <Switch>
                    <Route path="/start">
                        <Start changeBG={this.changePage}/>
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio changeBG={this.changePage}/>
                    </Route>
                    <Redirect to="/start"/>
                </Switch>
            </div>
        )
    }
}

export default Main;