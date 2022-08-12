import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import {connect} from "react-redux";
import {history} from "./managers/history";
import Dashboard from "./modules/handler"
const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/dashboard'} component={Dashboard}/>
                <Redirect exact from='*' to="/dashboard"/>
            </Switch>
        </Router>);
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps)(Routes);
