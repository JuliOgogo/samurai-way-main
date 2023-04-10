import {AppThunkType} from "./redux-store";
import {getAuthUserData} from "./authReducer";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const setInitializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
}) as const

export const initialize = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(setInitializedSuccess())
    })
}

export type AppActionType = ReturnType<typeof setInitializedSuccess>

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'