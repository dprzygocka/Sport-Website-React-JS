import { call, takeLatest } from 'redux-saga/effects'
import { getTeams } from '../../api/sport/teams'
import request from './helpers/request'
import { USER } from '../actions/action'


function* init(action){
    const response = yield call(request, { type: USER.FETCH, rootAction: action }, () => getUser())

    console.log(response)
}

export default function*(){
    yield takeLatest(USER.INIT, init)
}