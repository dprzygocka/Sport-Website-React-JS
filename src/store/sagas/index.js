import { all } from 'redux-saga/effects'
import activities from './activities'
import profile from './profile'
import teams from './teams'

const allSagas = [
    teams(),
    profile(),
    activities()
]

export default function* rootSaga(){
    yield all(allSagas)
}