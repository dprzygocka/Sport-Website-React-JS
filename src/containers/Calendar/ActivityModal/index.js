import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as _ from 'lodash'
import { formatDate } from '../../../utils/date'
import { formatTime } from '../../../utils/time'

const ActivityModal = props => {
    const activity = _.get(props, 'activity')

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {_.get(activity, 'match') && 'Match '}
                    {_.get(activity, 'activityName')}{'  '}
                    {formatDate(_.get(activity, 'reservation.startAt'))}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{'Time: ' + formatTime(_.get(activity, 'reservation.startAt'))} - {formatTime(_.get(activity, 'reservation.endAt'))}</div>
                <div>{'Description: '}</div><p>{_.get(activity, 'description')}</p>
                {_.get(activity, 'activityStatuses') && _.get(activity, 'activityStatuses').map(status =>
                    <div>{_.get(status, 'user.firstName') + ': '+ _.get(status, 'userStatus.statusName')}</div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Update</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActivityModal