import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import selectors from './selectors'
import * as _ from 'lodash'
import TouchableOpacity from '../../components/TouchableOpacity'
import './index.css'
import { formatDate } from '../../utils/date'
import { formatTime } from '../../utils/time'
import ActivityModal from './ActivityModal'
import Button from '../../components/Button'
import { color } from '../../styles/color'
import CreateNewActivityModal from './CreateNewActivityModal'
import LoginAccess from '../LoginAccess'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isActivityModalVisible: false,
            activity: undefined,
            isCreateNewActivityModalVisible: false
        }
    }

    componentDidMount() {
        this.props.onInit();
        if (!_.isEmpty(this.props.activities)) {
            this.setState({ isLoading: false })
        }
    }

    openModal = activity => {
        this.setState({ activity: activity })
        this.setState({ isActivityModalVisible: true })
    }

    hideModal = () => {
        this.setState({ activity: undefined })
        this.setState({ isActivityModalVisible: false })
    }

    openCreateNewActivityModal = () => {
        this.setState({ isCreateNewActivityModalVisible: true })
    }

    closeCreateNewActivityModal = () => {
        this.setState({ isCreateNewActivityModalVisible: false })
    }

    componentDidUpdate(){
        if(_.isEmpty(this.props.activities))
            this.props.onInit()
    }

    render() {
        const { activities } = this.props
        return (
            <LoginAccess>
            <div className='activities-container'>
                {activities && activities.map(activity => {
                    return (
                        <TouchableOpacity
                            className='activity-container'
                            onClick={() => this.openModal(activity)}
                        >
                            <div className='activity-title'>{_.get(activity, 'activityName')}</div>
                            <div>{_.get(activity, 'description')}</div>
                            <div>{formatDate(_.get(activity, 'reservation.startAt'))}</div>
                            <div>{formatTime(_.get(activity, 'reservation.startAt'))} - {formatTime(_.get(activity, 'reservation.endAt'))}</div>
                        </TouchableOpacity>
                    )
                }
                )}
                <Button
                    style={{
                        backgroundColor: color.darkBlue,
                        width: '150px',
                        height: '150px',
                        alignSelf: 'flex-end',
                        fontFamily: 'Salsa',
                        position: 'absolute',
                        borderRadius: '75px',
                        right: '10%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    placeholder='Create New Activity'
                    onClick={this.openCreateNewActivityModal}
                />
                <ActivityModal
                    show={this.state.isActivityModalVisible}
                    onHide={this.hideModal}
                    activity={this.state.activity}
                />
                <CreateNewActivityModal
                    show={this.state.isCreateNewActivityModalVisible}
                    onHide={this.closeCreateNewActivityModal}
                    activity={this.state.isCreateNewActivityModalVisible}
                    createActivity={this.props.createActivity}
                />
            </div>
            </LoginAccess>
        )
    }
}

export default connect(selectors, actions)(Calendar);