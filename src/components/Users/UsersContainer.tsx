import React from "react";
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/types";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {AppDispatchType} from "../../redux/redux-store";
import {UsersApiComponent} from "./UsersApiComponent";

export type UsersContainerPropsType = {}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    }
}

export const UsersContainer: React.FC<UsersContainerPropsType> = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)