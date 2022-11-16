import {ActionType, DialogsPageStateType, MessageType} from "./state";
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
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case UPDATE_NEW_MESSAGE: {
            state.newMessageText = action.text
            return state
        }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageAC = (text: string) => ({type: UPDATE_NEW_MESSAGE, text}) as const

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
