import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../containers/Dashboard'
import Navigation from '../containers/Navigation'
import Calendar from '../containers/Calendar'

/*
    To add a new route to the app, register it here
*/

export default function Routes() {
    return (
        <div>
            <Navigation />
            <Switch>
                <Redirect from='/' to='/dashboard' exact />
                <Route path='/dashboard' component={Dashboard} exact />
                <Route path='/calendar' component={Calendar} exact />
            </Switch>
        </div>
    )
}