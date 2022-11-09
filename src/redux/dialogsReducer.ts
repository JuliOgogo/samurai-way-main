import {ActionType, DialogsPageStateType, MessageType} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (action: ActionType, state: DialogsPageStateType): DialogsPageStateType => {
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
