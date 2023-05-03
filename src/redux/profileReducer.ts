import {ProfilePageStateType, UserProfileType} from './types';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

const initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounter: 11},
        {id: 2, message: 'It\'s my first post', likesCounter: 54},
        {id: 3, message: 'I\'m learning React', likesCounter: 3},
    ],
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
                posts: [{id: v1(), message: action.postText, likesCounter: 0}, ...state.posts],
            }
        }
        case  UPDATE_NEW_POST: {
            return {
                ...state,
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePost>

export const addPost = (postText: string) => ({type: ADD_POST, postText}) as const
export const updateNewPostAC = (text: string) => ({type: UPDATE_NEW_POST, text}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const deletePost = (id: string | number) => ({type: DELETE_POST, id}) as const

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

const ADD_POST = 'profile/ADD-POST'
const UPDATE_NEW_POST = 'profile/UPDATE-NEW-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE-POST'
