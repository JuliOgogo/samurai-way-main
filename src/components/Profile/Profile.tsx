import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/types";

export type ProfilePropsType = {
    profile: UserProfileType
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;