import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../containers/Navigation';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = true; //for now we assume that the user is signed in

    if (isPrivate && !isPrivate) {
        return <Redirect to="/signIn" />
    }

    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}