import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likeCounter={3}/>
                <Post message={"It's my first post"} likeCounter={74}/>
                <Post message={"I'm learning React"} likeCounter={81}/>
            </div>

        </div>
    );
}

export default MyPosts;