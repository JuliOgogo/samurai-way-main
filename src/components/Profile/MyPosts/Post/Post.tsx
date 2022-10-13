import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string,
    likeCounter: number,
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-55-700x700.jpg"/>
            <span>{props.message}</span>
            <div><span>Like {props.likeCounter}</span></div>
        </div>
    );
}

export default Post;