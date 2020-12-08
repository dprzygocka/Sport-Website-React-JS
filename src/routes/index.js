import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../containers/Dashboard'
import Navigation from '../containers/Navigation'
import Calendar from '../containers/Calendar'
import Login from '../containers/Login'
import { connect } from 'react-redux'
import selectors from './selectors'
import UserData from './../containers/User/index'
/*
    To add a new route to the app, register it here
*/

const Routes = props => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route path='/' component={Login} exact />
                <Route path='/dashboard' component={Dashboard} exact />
                <Route path='/calendar' component={Calendar} exact />
                <Route path='/profile' component={UserData} exact />
            </Switch>
        </div>
    )
}

export default connect(selectors)(Routes)