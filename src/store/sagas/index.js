import { all } from 'redux-saga/effects'
import profile from './profile'
import teams from './teams'

const allSagas = [
    teams(),
    profile()
]

export default function* rootSaga(){
    yield all(allSagas)
}