import axios from 'axios'
import {GET_USER_CARDS, SET_LOADING} from "../types";

export const setLoading = () => {
    return {type: SET_LOADING}
}

export function getUserCards (id) {
    return async dispatch => {
        console.log('WE ARE ID ACTION')
        try {
            dispatch(setLoading())
            const cards = await axios.get(`http://localhost:8080/api/card/user/${id}`).then(response => response.data)
            console.log(cards)
            dispatch({type: GET_USER_CARDS, payload: cards})
        } catch (e) {
            console.log(e)
        }
    }
}