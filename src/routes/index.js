import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import RouteWrapper from './Route'
import Dashboard from '../containers/Dashboard'
import Navigation from '../containers/Navigation'
import Calendar from '../containers/Calendar'
import { connect } from 'react-redux'
import selectors from './selectors'
import UserData from './../containers/User/index'
/*
    To add a new route to the app, register it here
*/

const Routes = props => {
    return (
        <>
            <Navigation/>
            <Switch>
                <RouteWrapper path='/dashboard' component={Dashboard} exact />
                <RouteWrapper path='/calendar' component={Calendar} exact />
                <RouteWrapper path='/profile' component={UserData} exact />
            </Switch>
        </>
    )
}

export default connect(selectors)(Routes)