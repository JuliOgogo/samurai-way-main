import React from "react";
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/types";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.profile === null) {
        return <Preloader/>
    }

    return <div className={s.profileInfo}>

        <div className={s.photoAndName}>
            <img className={s.photo}
                 src={props.profile.photos.small ? props.profile.photos.small : 'https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-55-700x700.jpg'}
                 alt="avatar"/>
            <div className={s.name}>
                {props.profile.fullName}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>

        <div className={s.description}>
            {/*{props.profile.aboutMe}<br/>
            {props.profile.contacts.vk}<br/>
            {props.profile.contacts.instagram}<br/>
            {props.profile.contacts.github}<br/>*/}
        </div>

    </div>
}