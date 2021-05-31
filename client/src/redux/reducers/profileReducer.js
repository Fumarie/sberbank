import { GET_USER, GET_USER_CARDS, SET_LOADING } from '../types'

const initialState = {
    profile: {},
    loading: false,
}

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [GET_USER]: (state, action) => ({...state, profile: action.payload, loading: false}),
    [GET_USER_CARDS]: (state, action) => ({...state, cards: action.payload}),
    DEFAULT: state => state
}

export const profileReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}