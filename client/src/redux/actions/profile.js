import axios from 'axios'
import { GET_USER, SET_LOADING } from "../types";

export const setLoading = () => {
    return {type: SET_LOADING}
}

export const getUser = (id) => {
    return async dispatch => {
        try {
            console.log(id)
            dispatch(setLoading())
            const user = await axios.get(`http://localhost:8080/api/user/${id}`).then(response => response.data)
            const profile = {
                name: user.fio.split(' ')[1],
                initials: `${user.fio.split(' ')[1].split('')[0]}${user.fio.split(' ')[0].split('')[0]}`,
                id: id
            }
            dispatch({type: GET_USER, payload: profile})
            console.log(user)
        } catch (e) {
            console.log(e)
        }
    }

}
