import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
}) as const

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const error = res.data.messages.length > 0 ? res.data.messages[0] : 'Something is wrong'
            dispatch(stopSubmit('Login', {_error: error}))
        }
    })
}

export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export type AuthActionType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'