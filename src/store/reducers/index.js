import { combineReducers } from 'redux';
import teams from './teams'
import profile from './profile'

const rootReducer = combineReducers({
    teams,
    profile
})

export default rootReducer