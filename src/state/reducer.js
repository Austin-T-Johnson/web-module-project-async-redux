import { combineReducers } from 'redux'
import * as types from './action-types'


const initialActivity = ''
function activity(activityState = initialActivity, action) {
    switch (action.type) {
        case types.GET_ACTIVITY: {
            const newActivity = action.payload
            return newActivity
        }
        default:
            return activityState
    }

}



export default combineReducers({ activity })