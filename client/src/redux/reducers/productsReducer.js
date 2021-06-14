import {
    GET_CARD,
    GET_USER_CARDS,
    GET_USER_SUM, GET_USERS_SUM,
    SET_CARD_PAGE_LOADING,
    SET_HOME_LOADING,
    SET_PRODUCTS_LOADING
} from "../types";

const initialState = {
    cards: [],
    card: {},
    loading: false,
    cardPageLoading: false,
    homePageLoading: false,
    userSum: 0,
    usersSum: 0
}

const handlers = {
    [SET_PRODUCTS_LOADING]: state => ({...state, loading: true}),
    [SET_HOME_LOADING]: state => ({...state, homePageLoading: true}),
    [SET_CARD_PAGE_LOADING]: state => ({...state, cardPageLoading: true}),
    [GET_USER_CARDS]: (state, action) => ({...state, cards: action.payload, loading: false}),
    [GET_CARD]: (state, action) => ({...state, card: action.payload, cardPageLoading: false}),
    [GET_USER_SUM]: (state, action) => ({...state, userSum: action.payload, homePageLoading: false}),
    [GET_USERS_SUM]: (state, action) => ({...state, usersSum: action.payload, homePageLoading: false}),
    DEFAULT: state => state
}

export const productsReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}