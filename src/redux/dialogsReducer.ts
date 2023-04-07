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
    ]
}

export const dialogsReducer = (state: DialogsPageStateType = initialState, action: ActionType): DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.message}],
            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof addMessage> |
    ReturnType<typeof updateNewMessageAC>

export const addMessage = (message: string) => ({type: ADD_MESSAGE, message}) as const
export const updateNewMessageAC = (text: string) => ({type: UPDATE_NEW_MESSAGE, text}) as const

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
