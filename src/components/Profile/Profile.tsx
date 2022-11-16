import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

export type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
}

export default Profile;