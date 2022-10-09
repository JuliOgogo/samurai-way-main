import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message={"Hi, how are you?"} likeCounter={3}/>
            <Post message={"It's my first post"} likeCounter={74}/>
            <Post message={"I'm learning React"} likeCounter={81}/>
        </div>
    );
}

export default MyPosts;