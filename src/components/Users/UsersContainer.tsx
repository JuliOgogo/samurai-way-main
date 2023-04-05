import React from "react";
import {connect} from "react-redux";
import {UserType} from "../../redux/types";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followUnfollowInProgress: Array<number>
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        /*this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })*/

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPage = (currentPage: number) => {
        /*this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/

        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   changeCurrentPage={this.changeCurrentPage}
                   followUnfollowInProgress={this.props.followUnfollowInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow})
)(UsersContainer)