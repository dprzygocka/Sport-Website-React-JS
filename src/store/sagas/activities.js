import { call, takeLatest } from 'redux-saga/effects'
import { getActivities } from '../../api/sport/activities'
import request from './helpers/request'
import { ACTIVITIES } from '../actions/action'


function* init(action){
    const response = yield call(request, { type: ACTIVITIES.FETCH, rootAction: action }, () => getActivities())
}

export default function*(){
    yield takeLatest(ACTIVITIES.INIT, init)
}