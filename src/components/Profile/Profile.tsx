import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/types";

export type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;