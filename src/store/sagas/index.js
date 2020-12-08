import { all } from 'redux-saga/effects'
import profile from './profile'
import teams from './teams'
import user from './user'

const allSagas = [
    teams(),
    profile(),
    user()
]

export default function* rootSaga(){
    yield all(allSagas)
}