import { combineReducers } from 'redux';
import teams from './teams'
import profile from './profile'
import user from './user'

const rootReducer = combineReducers({
    teams,
    profile,
    user,
})

export default rootReducer