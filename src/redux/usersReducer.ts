import {UsersPageStateType, UserType} from "./types";
import {v1} from "uuid";

const initialState: UsersPageStateType = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: 'Julia T',
            status: 'Want to play Genshin Impact',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Alex K',
            status: 'Working hard',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Oksana T',
            status: 'Walking with Senji',
            location: {city: 'Moscow', country: 'Russia'}
        },
    ]
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC>

export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
