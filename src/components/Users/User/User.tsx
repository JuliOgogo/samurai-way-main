import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../../redux/types';

export type UserPropsType = {
    user: UserType
    followUnfollowInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

export const User: React.FC<UserPropsType> = ({user, followUnfollowInProgress, unfollow, follow}) => {
    const u = user

    return <div key={u.id} className={s.user}>

        <div className={s.AvatarAndButton}>
            <NavLink to={`/profile/${u.id}`}>
                <img className={s.avatar} src={u.photos.small === null ? userPhoto : u.photos.small} alt="user photo"/>
            </NavLink>
            {
                u.followed ?

                    <button onClick={() => {
                        unfollow(u.id)
                    }}
                            disabled={followUnfollowInProgress.some(id => id === u.id)}>Unfollow</button> :

                    <button onClick={() => {
                        follow(u.id)
                    }}
                            disabled={followUnfollowInProgress.some(id => id === u.id)}>Follow</button>
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
    </div>
}