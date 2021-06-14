import { GET_USER, GET_USER_SUM, SET_PROFILE_LOADING } from '../types'

const initialState = {
    profile: {},
    loading: false,
}

const handlers = {
    [SET_PROFILE_LOADING]: state => ({...state, loading: true}),
    [GET_USER]: (state, action) => ({...state, profile: action.payload, loading: false}),
    DEFAULT: state => state
}

export const profileReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}