import * as Action from './action'
import initialState from '../store/initialState'

export const ItemsReducers = (state = initialState.items, action) =>{
    switch(action.type){
        case Action.FETCH_ITEM:
            return{
                ...state, list: action.payload
            }
        default:
            return state
    }
}