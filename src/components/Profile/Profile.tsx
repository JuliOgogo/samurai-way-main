import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="" className={s.headerImg}/>
            <div>
                Avatar + description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;