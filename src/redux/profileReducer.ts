import {ProfilePageStateType, UserProfileType} from "./types";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounter: 11},
        {id: 2, message: 'It\'s my first post', likesCounter: 54},
        {id: 3, message: 'I\'m learning React', likesCounter: 3},
    ],
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 0,
        photos: {
            small: null,
            large: null,
        }
    },
    status: ''
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
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostAC = (text: string) => ({type: UPDATE_NEW_POST, text}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data))
    })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'