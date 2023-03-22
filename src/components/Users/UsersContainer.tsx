import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType, UserType} from "../../redux/types";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {AppDispatchType} from "../../redux/redux-store";
import {UsersClass} from "./UsersClass";

export type UsersContainerPropsType = {}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer: React.FC<UsersContainerPropsType> = connect(mapStateToProps, mapDispatchToProps)(UsersClass)