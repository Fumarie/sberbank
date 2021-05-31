import { GET_USER_CARDS, SET_LOADING } from "../types";

const initialState = {
    cards: [],
}

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [GET_USER_CARDS]: (state, action) => ({...state, cards: action.payload}),
    DEFAULT: state => state
}

export const productsReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}