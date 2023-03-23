import React from "react";
import {UserType} from "../../redux/types";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'

export type UsersPropsType = {
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

export class UsersClass extends React.Component<UsersPropsType, any> {
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
        const usersList = this.props.users.map(u => <div key={u.id} className={s.user}>

            <div className={s.AvatarAndButton}>
                <img className={s.avatar} src={u.photos.small === null ? userPhoto : u.photos.small} alt="user photo"/>
                {
                    u.followed ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)}>Follow</button>
                }
            </div>
            <div className={s.body}>
                <div className={s.NameAndStatus}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.location}>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </div>
            </div>
        </div>)

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.usersList}>
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ''} onClick={() =>
                    this.changeCurrentPage(p)
                }>{p}</span>)}
            </div>
            {usersList}
        </div>;
    }
}