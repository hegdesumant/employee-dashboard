import { actions } from '../actions/actionConstants'

export const appRedcers = (state, { type, payload }) => {
    switch (type) {
        case actions.SET_LOGIN_INFO: return {
            ...state,
            isUserActive: payload

        }
        default: return {
            ...state
        }
    }
}