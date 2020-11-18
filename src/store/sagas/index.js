import { all, call } from 'redux-saga/effects'
import teams from './teams'

const allSagas = [
    teams()
]

export default function* rootSaga(){
    yield all(allSagas)
}