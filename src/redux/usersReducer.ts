import {UsersPageStateType, UserType} from './types';
import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {objectsHelper} from '../utils/objectsHelper';

const initialState: UsersPageStateType = {
    users: [
        /*{
            id: v1(),
            followed: false,
            name: 'Julia T',
            status: 'Want to play Genshin Impact',
            location: {city: 'Moscow', country: 'Russia'},
            photos: {small: null}
        },
        {
            id: v1(),
            followed: true,
            name: 'Alex K',
            status: 'Working hard',
            location: {city: 'Moscow', country: 'Russia'},
            photos: {small: null}
        },
        {
            id: v1(),
            followed: true,
            name: 'Oksana T',
            status: 'Walking with Senji',
            location: {city: 'Moscow', country: 'Russia'},
            photos: {small: null}
        },*/
    ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followUnfollowInProgress: []
}

export const usersReducer = (state: UsersPageStateType = initialState, action: ActionType): UsersPageStateType => {
    switch (action.type) {
        case FOLLOW_SUCCESS: {
            return {
                ...state,
                users: objectsHelper(state.users, action.userId, 'id', {followed: true})

                /*users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)*/
            }
        }
        case UNFOLLOW_SUCCESS: {
            return {
                ...state,
                users: objectsHelper(state.users, action.userId, 'id', {followed: false})

                /*users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)*/
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.value
            }
        }
        case SET_FOLLOW_UNFOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followUnfollowInProgress: action.value ? [...state.followUnfollowInProgress, action.id] :
                    state.followUnfollowInProgress.filter(id => id != action.id)
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unFollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setFollowUnfollowInProgress>

export const followSuccess = (userId: number) => ({type: FOLLOW_SUCCESS, userId}) as const
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW_SUCCESS, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount}) as const
export const toggleIsFetching = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value}) as const
export const setFollowUnfollowInProgress = (value: boolean, id: number) => ({
    type: SET_FOLLOW_UNFOLLOW_IN_PROGRESS,
    value,
    id
}) as const

export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowUnfollowInProgress(true, userID))

    const res = await apiMethod(userID)

    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(setFollowUnfollowInProgress(false, userID))
}

export const follow = (userID: number) => async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.follow
    followUnfollowFlow(dispatch, userID, apiMethod, followSuccess)
}

export const unfollow = (userID: number) => async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.unfollow
    followUnfollowFlow(dispatch, userID, apiMethod, unFollowSuccess)
}

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS'
const UNFOLLOW_SUCCESS = 'users/UNFOLLOW_SUCCESS'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const SET_FOLLOW_UNFOLLOW_IN_PROGRESS = 'users/SET_FOLLOW_UNFOLLOW_IN_PROGRESS'
