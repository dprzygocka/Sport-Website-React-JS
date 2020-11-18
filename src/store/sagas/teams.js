import { call, takeLatest } from 'redux-saga/effects'
import { getTeams } from '../../api/sport/teams'
import request from './helpers/request'
import { TEAMS } from '../actions/action'


function* init(action){
    const response = yield call(request, { type: TEAMS.FETCH, rootAction: action }, () => getTeams())

    console.log(response)
}

export default function*(){
    yield takeLatest(TEAMS.INIT, init)
}