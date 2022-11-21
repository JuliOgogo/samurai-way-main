import {DialogsPageStateType} from "./types";
import {v1} from "uuid";

const initialState: DialogsPageStateType = {
    dialogs: [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Galya'},
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lol :D'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageStateType = initialState, action: ActionType): DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessageText: action.text
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageAC>

export const addMessageAC = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageAC = (text: string) => ({type: UPDATE_NEW_MESSAGE, text}) as const

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
