import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';
import {sideBarReducer} from './sideBarReducer';
import {usersReducer} from './usersReducer';
import {AuthActionType, authReducer} from './authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionType, appReducer} from './appReducer';

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

/*export const store = createStore(rootReducer, applyMiddleware(thunk))*/

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootActionsType = AuthActionType | AppActionType | FormAction
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, RootActionsType>

// @ts-ignore
window.store = store