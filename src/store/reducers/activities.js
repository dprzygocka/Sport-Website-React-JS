import { ACTIVITIES } from '../actions/action'
import { REQUEST } from '../actions/request'

export default function(state = {}, action){
    if(action.sequence === REQUEST.SUCCESS){
        switch(action.type){
            case(ACTIVITIES.FETCH): {
                return action.payload;
            }
            default:{
                return state;
            }
        }
    }
    return state;
}