import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageStateType} from "../../redux/state";

export type ProfilePropsType = {
    state: ProfilePageStateType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;