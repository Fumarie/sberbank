import axios from 'axios'
import {
    GET_CARD,
    GET_USER_CARDS,
    GET_USER_SUM, GET_USERS_SUM,
    SET_CARD_PAGE_LOADING,
    SET_HOME_LOADING,
    SET_PRODUCTS_LOADING
} from "../types";

export const setLoading = () => {
    return {type: SET_PRODUCTS_LOADING}
}

export const setCardPageLoading = () => {
    return {type: SET_CARD_PAGE_LOADING}
}

export function getUserCards (id) {
    return async dispatch => {
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

export function getCard(id) {
    return async dispatch => {
        try {
            dispatch(setCardPageLoading())
            const card = await axios.get(`http://localhost:8080/api/card/${id}`).then(response => response.data)
            console.log(card)
            dispatch({type: GET_CARD, payload: card})
        } catch (e) {
            console.log(e)
        }
    }
}

export const setHomePageLoading = () => {
    return {type: SET_HOME_LOADING}
}

export const getUserSum = (id) => {
    return async dispatch => {
        try {
            if(id) {
                dispatch(setHomePageLoading())
                const sum = await axios.get(`http://localhost:8080/api/card/getUserSum/${id}`).then(response => response.data)
                dispatch({type: GET_USER_SUM, payload: Number(sum)})
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const getUsersSum = () => {
    return async dispatch => {
        try {
                dispatch(setHomePageLoading())
                const sum = await axios.get(`http://localhost:8080/api/card/get/fullSum`).then(response => response.data)
                dispatch({type: GET_USERS_SUM, payload: Number(sum)})
        } catch (e) {
            console.log(e)
        }
    }
}
