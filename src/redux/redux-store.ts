import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootActionsType = AuthActionType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, RootActionsType>

// @ts-ignore
window.store = store