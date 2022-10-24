import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageStateType} from "../../redux/state";

export type ProfilePropsType = {
    state: ProfilePageStateType
    addPost: (post: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;