import { combineReducers } from 'redux';
import teams from './teams'
import profile from './profile'
import activities from './activities'

const rootReducer = combineReducers({
    teams,
    profile,
    activities
})

export default rootReducer