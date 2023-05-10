import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../redux/types';
import {Pagination} from '@mui/material';
import {User} from './User/User';

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    followUnfollowInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    changeCurrentPage,
                                                    followUnfollowInProgress,
                                                    follow, unfollow
                                                }) => {

    const usersList = users.map(u => <User key={u.id} user={u} followUnfollowInProgress={followUnfollowInProgress}
                                           unfollow={unfollow} follow={follow}/>)

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