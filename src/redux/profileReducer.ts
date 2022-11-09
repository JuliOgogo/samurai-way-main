import {ActionType, PostType, ProfilePageStateType} from "./state";
import {v1} from "uuid";

export const profileReducer = (action: ActionType, state: ProfilePageStateType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCounter: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case  UPDATE_NEW_POST: {
            state.newPostText = action.text
            return state
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostAC = (text: string) => ({type: UPDATE_NEW_POST, text}) as const

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'