import { AUTH } from '../actions/action'
import { REQUEST } from '../actions/request'

export default function(state = {}, action){
    if(action.sequence === REQUEST.SUCCESS){
        switch(action.type){
            case(AUTH.LOGIN): {
                return action.payload;
            }
            default:{
                return state;
            }
        }
    }
    return state;
}