import React from "react";
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/types";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "../../redux/usersReducer";
import {AppDispatchType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type UsersContainerPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (setTotalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (value: boolean) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType, any> {
    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
    }

    changeCurrentPage = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   changeCurrentPage={this.changeCurrentPage}
            />
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetching: (value: boolean) => dispatch(toggleIsFetchingAC(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)