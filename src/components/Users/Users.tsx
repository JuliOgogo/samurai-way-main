import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {UserType} from "../../redux/types";
import {Pagination} from "@mui/material";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: UserType[]
    followSuccess: (userId: number) => void
    unFollowSuccess: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    setFollowUnfollowInProgress: (value: boolean, id: number) => void
    followUnfollowInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    followSuccess,
                                                    unFollowSuccess,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    changeCurrentPage,
                                                    setFollowUnfollowInProgress,
                                                    followUnfollowInProgress,
                                                    follow, unfollow
                                                }) => {

    const usersList = users.map(u => <div key={u.id} className={s.user}>

        <div className={s.AvatarAndButton}>
            <NavLink to={`/profile/${u.id}`}>
                <img className={s.avatar} src={u.photos.small === null ? userPhoto : u.photos.small} alt="user photo"/>
            </NavLink>
            {
                u.followed ?

                    <button onClick={() => {
                        /*setFollowUnfollowInProgress(true, u.id)
                        usersAPI.unfollow(u.id).then(res => {
                            if (res.data.resultCode === 0) {
                                unFollowSuccess(u.id)
                            }
                            setFollowUnfollowInProgress(false, u.id)
                        })*/

                        unfollow(u.id)

                    }} disabled={followUnfollowInProgress.some(id => id === u.id)}>Unfollow</button> :


                    <button onClick={() => {
                        /*setFollowUnfollowInProgress(true, u.id)
                        usersAPI.follow(u.id).then(res => {
                            if (res.data.resultCode === 0) {
                                followSuccess(u.id)
                            }
                            setFollowUnfollowInProgress(false, u.id)
                        })*/

                        follow(u.id)

                    }} disabled={followUnfollowInProgress.some(id => id === u.id)}>Follow</button>
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

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [page, setPage] = React.useState(currentPage);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        changeCurrentPage(value)
        setPage(value)
    };

    return <div className={s.usersList}>
        <div className={s.pagination}>
            <Pagination count={pages.length} page={page} onChange={handleChange} color={'secondary'}/>
        </div>
        {usersList}
    </div>;
}