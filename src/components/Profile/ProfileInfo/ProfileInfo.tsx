import React from "react";
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/types";
import {Preloader} from "../../common/Preloader/Preloader";

export type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.profile === null) {
        return <Preloader/>
    }

    return <div>
        <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="" className={s.headerImg}/>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small ? props.profile.photos.small : ''} alt="avatar"/>
            <div className={s.description}>
                {props.profile.fullName}<br/>
                {props.profile.aboutMe}<br/>
                {props.profile.contacts.vk}<br/>
                {props.profile.contacts.instagram}<br/>
                {props.profile.contacts.github}<br/>
            </div>
        </div>
    </div>
}