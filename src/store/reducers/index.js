import { combineReducers } from 'redux';
import teams from './teams'
import profile from './profile'
import activities from './activities'
import user from './user'

const rootReducer = combineReducers({
    teams,
    profile,
    activities,
    user,
})

export default rootReducer