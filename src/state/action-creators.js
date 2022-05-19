import * as types from './action-types'
import axios from 'axios'

const url = 'https://www.boredapi.com/api/activity'

export function getActivity() {
    return function (dispatch) {
        axios.get(url)
            .then(res => {
                dispatch({
                    type: types.GET_ACTIVITY,
                    payload: res.data.activity
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}



