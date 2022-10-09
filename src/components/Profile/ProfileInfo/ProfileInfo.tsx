import React from "react";
import s from './ProfileInfo.module.css';

export type ProfileInfoPropsType = {}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return <div>
        <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="" className={s.headerImg}/>
        <div className={s.descriptionBlock}>
            Avatar + description
        </div>
    </div>
}