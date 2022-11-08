import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageStateType} from "../../redux/state";

export type ProfilePropsType = {
    profilePageState: ProfilePageStateType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfilePropsType> = ({profilePageState, dispatch}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={profilePageState.posts}
                     newPostText={profilePageState.newPostText}
                     dispatch={dispatch}/>
        </div>
    );
}

export default Profile;