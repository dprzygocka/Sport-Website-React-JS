import { call, put, takeLatest } from 'redux-saga/effects'
import request from './helpers/request'
import { AUTH, LOGIN } from '../actions/action'
import { getProfile } from '../../api/sport/profiles'
import { REQUEST } from '../actions/request'
import history from '../../services/history'
import { push } from 'react-router-redux';


function* login(action){
    const response = yield call(request, { type: AUTH.LOGIN, rootAction: action }, () => getProfile(action.payload))

    if(response.sequence == REQUEST.SUCCESS){
        history.push('/dashboard');
    }
}

export default function*(){
    yield takeLatest(LOGIN.SUBMIT, login)
}