import { GET_CARD, GET_USER_CARDS, SET_CARD_PAGE_LOADING, SET_PRODUCTS_LOADING } from "../types";

const initialState = {
    cards: [],
    card: {},
    loading: false,
    cardPageLoading: false
}

const handlers = {
    [SET_PRODUCTS_LOADING]: state => ({...state, loading: true}),
    [SET_CARD_PAGE_LOADING]: state => ({...state, cardPageLoading: true}),
    [GET_USER_CARDS]: (state, action) => ({...state, cards: action.payload, loading: false}),
    [GET_CARD]: (state, action) => ({...state, card: action.payload, cardPageLoading: false}),
    DEFAULT: state => state
}

export const productsReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}