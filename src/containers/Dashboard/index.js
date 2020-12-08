import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './selectors'
import * as actions from './actions'
import * as _ from 'lodash'

import UserData from './../User/index.js'

const Dashboard = props => {
    {/*useEffect(() => {
        if(!_.isNil(props.teams))
            props.onInit()
    }, [])*/}
    return(
        <div>
            <h1>This is a dashboard!</h1>
            <UserData user_id={1} />
        </div>
    )
}

export default connect(selectors, actions)(Dashboard);