import { call, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { createActivity, getActivities } from '../../api/sport/activities'
import request from './helpers/request'
import { ACTIVITIES } from '../actions/action'
import * as _ from 'lodash'
import { REQUEST } from '../actions/request'
import { selectUserId, selectUsersTeamId } from '../selectors/auth'


function* init(action){
    const teamId = yield select(selectUsersTeamId)
    const response = yield call(request, { type: ACTIVITIES.FETCH, rootAction: action }, () => getActivities(teamId))
}

function* add(action){
    const data = _.get(action, 'payload');
    const userId = yield select(selectUserId);
    const teamId = yield select(selectUsersTeamId);

    let payload = {
        activityName: data.activityName,
        team: {
            teamId: teamId
        },
        capacity: data.capacity,
        description: data.description,
        creator: {
            userId: userId //Get user id from login
        },
        activityType: {
            activityTypeName : data.activityType
        },
        isCancelled: false,
        reservation: {
            startAt: data.startAt,
            endAt: data.endAt, 
            location: {
                locationId: data.locationId
            }
        }
    }

    const response = yield call(request, { type: ACTIVITIES.POST, rootAction: action }, () => createActivity(payload));
    alert("Activity has been created")
    if(response.status == REQUEST.SUCCESS){
        alert("Activity has been added")
    }
}

export default function*(){
    yield takeLatest(ACTIVITIES.INIT, init)
    yield takeLatest(ACTIVITIES.ADD, add)
}