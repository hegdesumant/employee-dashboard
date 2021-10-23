import { actions } from './actionConstants'


export const setLoginInfoRedux = (data) => ({
    type: actions.SET_LOGIN_INFO,
    payload: data
})