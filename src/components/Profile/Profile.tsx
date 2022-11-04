import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageStateType} from "../../redux/state";

export type ProfilePropsType = {
    profilePageState: ProfilePageStateType
    addPost: () => void
    updateNewPost: (text: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePageState, addPost, updateNewPost}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={profilePageState.posts}
                     newPostText={profilePageState.newPostText}
                     addPost={addPost}
                     updateNewPost={updateNewPost}/>
        </div>
    );
}

export default Profile;