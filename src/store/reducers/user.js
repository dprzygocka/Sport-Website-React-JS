import { useReducer } from 'react';
import { USER } from '../actions/action'
import { REQUEST } from '../actions/request'

export default function(state = {}, action){
    if(action.sequence === REQUEST.SUCCESS){
        switch(action.type){
            case(useReducer.FETCH): {
                return action.payload;
            }
            default:{
                return state;
            }
        }
    }
    return state;
}