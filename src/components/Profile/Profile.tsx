import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {}

const Profile = (props: ProfilePropsType) => {

    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCounter: 11},
        {id: 2, message: 'It\'s my first post', likesCounter: 54},
        {id: 3, message: 'I\'m learning React', likesCounter: 3},
    ]

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;