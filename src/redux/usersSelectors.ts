import {AppRootStateType} from "./redux-store";

export const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowUnfollowInProgress = (state: AppRootStateType) => {
    return state.usersPage.followUnfollowInProgress
}