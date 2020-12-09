import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import selectors from './selectors'
import { connect } from 'react-redux'

const RouteWrapper = props =>{
    const {
        component,
        isPrivate,
        isLoggedIn,
        ...rest} = props;

   /* if (!isLoggedIn) {
        return <Redirect to='/dashboard'/>
    }*/

    return <Route {...rest} component={component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}

export default connect(selectors)(RouteWrapper);