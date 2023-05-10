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
    return <div key={user.id} className={s.user}>

        <div className={s.AvatarAndButton}>
            <NavLink to={`/profile/${user.id}`}>
                <img className={s.avatar} src={user.photos.small === null ? userPhoto : user.photos.small} alt='user photo'/>
            </NavLink>
            {
                user.followed ?

                    <button onClick={() => {
                        unfollow(user.id)
                    }}
                            disabled={followUnfollowInProgress.some(id => id === user.id)}>Unfollow</button> :

                    <button onClick={() => {
                        follow(user.id)
                    }}
                            disabled={followUnfollowInProgress.some(id => id === user.id)}>Follow</button>
            }
        </div>
        <div className={s.body}>
            <div className={s.NameAndStatus}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={s.location}>
                <div>{'user.location.city'}</div>
                <div>{'user.location.country'}</div>
            </div>
        </div>
    </div>
}