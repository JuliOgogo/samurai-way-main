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

type ActionType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'