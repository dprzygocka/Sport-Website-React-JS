import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import Dashboard from '../containers/Dashboard'

/*
    To add a new route to the app, register it here
*/

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Dashboard} exact/>
        </Switch>
    )
}