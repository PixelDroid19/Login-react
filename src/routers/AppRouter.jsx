import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route
}   from 'react-router-dom';
import Register from '../components/Register'
import AppGeek from '../containers/AppGeek';

export default class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Register}/>
                    <Route exact path="/" component={AppGeek}/>
                </Switch>
            </Router>
        )
    }
}