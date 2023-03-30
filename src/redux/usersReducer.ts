import {UsersPageStateType, UserType} from "./types";

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
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
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
    ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setFollowUnfollowInProgress>

export const follow = (userId: number) => ({type: FOLLOW, userId}) as const
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount}) as const
export const toggleIsFetching = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value}) as const
export const setFollowUnfollowInProgress = (value: boolean, id: number) => ({
    type: SET_FOLLOW_UNFOLLOW_IN_PROGRESS,
    value,
    id
}) as const

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FOLLOW_UNFOLLOW_IN_PROGRESS = 'SET_FOLLOW_UNFOLLOW_IN_PROGRESS'
