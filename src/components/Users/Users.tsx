import React from "react";
import {UserType} from "../../redux/types";
import s from './Users.module.css'

export type UsersPropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    follow,
                                                    unFollow,
                                                    setUsers
                                                }) => {

    const usersList = users.map(u => <div key={u.id} className={s.user}>

        <div className={s.AvatarAndButton}>
            <div className={s.avatar}></div>
            {
                u.followed ? <button onClick={() => unFollow(u.id)}>Unfollow</button> :
                    <button onClick={() => follow(u.id)}>Follow</button>
            }
        </div>
        <div className={s.body}>
            <div className={s.NameAndStatus}>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </div>
            <div className={s.location}>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
            </div>
        </div>
    </div>)

    return <div className={s.usersList}>{usersList}</div>
}