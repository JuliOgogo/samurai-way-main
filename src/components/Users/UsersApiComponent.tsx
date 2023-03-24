import React from "react";
import {UserType} from "../../redux/types";
import axios from "axios";
import {Users} from "./Users";

export type UsersApiComponentType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (setTotalCount: number) => void
}

export class UsersApiComponent extends React.Component<UsersApiComponentType, any> {
    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
    }

    changeCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <Users users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      changeCurrentPage={this.changeCurrentPage}
        />
    }
}