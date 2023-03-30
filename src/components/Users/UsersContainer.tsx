import React from "react";
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/types";
import {
    follow,
    setCurrentPage,
    setFollowUnfollowInProgress,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export type UsersContainerPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (setTotalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (value: boolean) => void
    setFollowUnfollowInProgress: (value: boolean, id: number) => void
    followUnfollowInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersContainerPropsType, any> {
    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    changeCurrentPage = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                   setFollowUnfollowInProgress={this.props.setFollowUnfollowInProgress}
                   followUnfollowInProgress={this.props.followUnfollowInProgress}
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
        isFetching: state.usersPage.isFetching,
        followUnfollowInProgress: state.usersPage.followUnfollowInProgress
    }
}

/*const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetching: (value: boolean) => dispatch(toggleIsFetchingAC(value))
    }
}*/

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, setFollowUnfollowInProgress
})(UsersContainer)