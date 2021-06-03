import axios from 'axios'
import { GET_CARD, GET_USER_CARDS, SET_CARD_PAGE_LOADING, SET_PRODUCTS_LOADING } from "../types";

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

        }
    }
}