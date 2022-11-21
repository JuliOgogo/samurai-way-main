import {ProfilePageStateType} from "./types";
import {v1} from "uuid";

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounter: 11},
        {id: 2, message: 'It\'s my first post', likesCounter: 54},
        {id: 3, message: 'I\'m learning React', likesCounter: 3},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageStateType = initialState, action: ActionType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: state.newPostText, likesCounter: 0}],
                newPostText: ''
            }
        }
        case  UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC>

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostAC = (text: string) => ({type: UPDATE_NEW_POST, text}) as const

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'