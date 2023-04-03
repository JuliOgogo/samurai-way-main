import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}}) as const

export const authMe = () => (dispatch: Dispatch) => {
    usersAPI.auth().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

type ActionType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'